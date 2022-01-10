FROM python:3

ADD /docker/init.sh /init.sh
RUN chmod 755 /init.sh

RUN useradd -ms /bin/bash pythonuser
USER pythonuser
WORKDIR /home/pythonuser

ENV PYTHONUNBUFFERED=1
ENV PATH="/home/pythonuser/.local/bin:${PATH}"

VOLUME [ "/requirements" ]

RUN /usr/local/bin/python -m pip install --upgrade pip
CMD [ "/init.sh" ]
