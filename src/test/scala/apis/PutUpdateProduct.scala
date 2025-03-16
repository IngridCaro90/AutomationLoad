package apis

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._

class PutUpdateProduct extends Simulation {

  val httpConfig = http.baseUrl("https://fakestoreapi.com")
    .acceptHeader("application/json")
    .contentTypeHeader("application/json")

  val csvFeeder = csv("bodyRequest/bodyUpdateProduct.csv").circular

  // Escenario para el Modelo abierto
  val escenarioAbierto = scenario("Update Product - Modelo Abierto")
    .feed(csvFeeder)
    .repeat(1) {
      exec(
        http("Update Products ${name} - Modelo Abierto")
          .put("/products/21")
          .body(ElFileBody("bodyRequest/body.json"))
          .check(status.is(200))
          .check(bodyString.saveAs("response"))
      )
        .exec {
          session => println(session("response").as[String]); session
        }
    }

  // Escenario para el Modelo cerrado
  val escenarioCerrado = scenario("Update Products - Modelo Cerrado")
    .feed(csvFeeder)
    .repeat(1) {
      exec(
        http("Update Products ${name} - Modelo Cerrado")
          .put("/products/21")
          .body(ElFileBody("bodyRequest/body.json"))
          .check(status.is(200))
          .check(bodyString.saveAs("response"))
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
