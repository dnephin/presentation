FROM    alpine:3.5

RUN     apk add -U lighttpd
ADD     lighttpd.conf /etc/lighttpd/lighttpd.conf
ADD     pres /var/www/localhost/htdocs
ADD     error_pages/ /var/www/localhost/errors
ADD     CHECKS /app/CHECKS
CMD     ["lighttpd", "-f", "/etc/lighttpd/lighttpd.conf", "-D"]

EXPOSE  80
