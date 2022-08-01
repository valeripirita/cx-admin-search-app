FROM openjdk:8-jre-alpine
MAINTAINER CSPTeam@gamesys.co.uk

RUN adduser -D -u 1010 member

WORKDIR /app/harness

ADD lib/wiremock-standalone-2.23.2.jar /app/harness/wiremock.jar

ADD requests_responses/mappings /app/harness/mappings

ADD requests_responses/responses /app/harness/__files/responses

EXPOSE 8080

RUN chown -R member:member /app/harness/

USER 1010

CMD ["java", "-XX:+UnlockExperimentalVMOptions", "-XX:+UseCGroupMemoryLimitForHeap", "-XX:MaxRAMFraction=2", "-cp", "wiremock.jar", "com.github.tomakehurst.wiremock.standalone.WireMockServerRunner", "--no-request-journal", "--local-response-templating", "--disable-banner", "true"]
