FROM fusuf/whatsasena:latest

RUN git clone https://github.com/jesonpro/Tenu /root/amazoneAlexa
WORKDIR /root/amazoneAlexa/
RUN git clone https://github.com/jesonpro/Angela-x
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
