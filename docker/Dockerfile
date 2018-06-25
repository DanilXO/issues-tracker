FROM jboss/wildfly:11.0.0.Final

WORKDIR $JBOSS_HOME

ADD web/target/*.war ./standalone/deployments/
ADD docker/standalone.xml ./standalone/configuration/

ADD docker/start.sh ./

CMD ["sh", "./start.sh"]
