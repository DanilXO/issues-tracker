OFFSET_PORT=0

if [ ! -z "${PORT}" ]; then
  OFFSET_PORT=${PORT};
  let "OFFSET_PORT -= 8080";
fi

echo "Offset port"
echo $OFFSET_PORT

$JBOSS_HOME/bin/standalone.sh -c standalone.xml -b 0.0.0.0 -Djboss.socket.binding.port-offset=$OFFSET_PORT