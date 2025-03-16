package apis

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._

class GetProducts extends Simulation {
  val httpConfig = http.baseUrl("https://fakestoreapi.com")

  // Escenario para el Modelo abierto
  val escenarioAbierto = scenario("Get Products - Modelo Abierto")
    .repeat(1) {
      exec(
        http("Get Products- Modelo Abierto")
          .get("/products")
          .check(status.is(200))
      )
        .exec{
          session => println(session("response").as[String]); session
        }
    }

  // Escenario para el Modelo cerrado
  val escenarioCerrado = scenario("Get Products - Modelo Cerrado")
    .repeat(1) {
      exec(
        http("Get Products - Modelo Cerrado")
          .get("/products")
          .check(status.is(200))
      )
        .exec{
          session => println(session("response").as[String]); session
        }
    }

  // Configuración del setUp para ambos escenarios
  setUp(
    escenarioAbierto.inject(
      stressPeakUsers(5).during(10),
      rampUsersPerSec(5).to(10).during(5).randomized,
      constantUsersPerSec(1).during(5).randomized
    ).protocols(httpConfig),
    escenarioCerrado.inject(
      rampConcurrentUsers(1).to(2).during(1),
      constantConcurrentUsers(2).during(1)
    ).protocols(httpConfig)
  )

}
