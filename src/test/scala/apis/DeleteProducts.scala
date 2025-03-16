package apis

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._

class DeleteProducts extends Simulation {

  val httpConfig = http.baseUrl("https://fakestoreapi.com")

  // Escenario para el Modelo abierto
  val escenarioAbierto = scenario("Delete Product - Modelo Abierto")
    .repeat(1) {
      exec(
        http("Delete Product - Modelo Abierto")
          .delete("/products/21")
          .check(status.is(200))
      )
        .exec{
          session => println(session("response").as[String]); session
        }
    }

  // Escenario para el Modelo cerrado
  val escenarioCerrado = scenario("Delete Products - Modelo Cerrado")
    .repeat(1) {
      exec(
        http("Delete Product - Modelo Cerrado")
          .delete("/products/21")
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
