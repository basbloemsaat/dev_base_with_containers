FROM python:3

ADD /docker/python_init.sh /python_init.sh
RUN chmod 755 /python_init.sh

RUN useradd -ms /bin/bash pythonuser
USER pythonuser
WORKDIR /home/pythonuser

ENV PYTHONUNBUFFERED=1
ENV PATH="/home/pythonuser/.local/bin:${PATH}"
ENV PYTHONPATH="${PYTHONPATH}:/home/pythonuser/pylib"

VOLUME [ "/requirements" ]

RUN /usr/local/bin/python -m pip install --upgrade pip
CMD [ "/python_init.sh" ]

EXPOSE 10001
