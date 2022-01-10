FROM python:3

RUN useradd -ms /bin/bash pythonuser
USER pythonuser
WORKDIR /home/pythonuser

ENV PYTHONUNBUFFERED=1
ENV PATH="/home/pythonuser/.local/bin:${PATH}"

VOLUME [ "/requirements" ]
ADD init.sh /init.sh

RUN /usr/local/bin/python -m pip install --upgrade pip
CMD [ "/init.sh" ]
