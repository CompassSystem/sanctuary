package compass_system.sanctuary.backend

import compass_system.sanctuary.backend.plugins.*
import io.ktor.server.application.*

fun main(args: Array<String>) {
	io.ktor.server.netty.EngineMain.main(args)
}

fun Application.module() {
	configureSerialization()
	configureHTTP()
	configureSecurity()
	configureRouting()
}
