FROM node:latest

ADD /docker/web_init.sh /web_init.sh
RUN chmod 755 /web_init.sh

RUN useradd -ms /bin/bash nodeuser
USER nodeuser
WORKDIR /home/nodeuser

VOLUME [ "/home/nodeuser" ]

CMD [ "/web_init.sh" ]

EXPOSE 10080
