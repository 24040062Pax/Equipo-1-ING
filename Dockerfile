
# ==========================================
# ETAPA 1: CLONAR EL REPOSITORIO DE GITHUB
# ==========================================

FROM alpine/git AS source

WORKDIR /repo

RUN git clone --depth 1 --branch main \
    https://github.com/24040062Pax/Equipo-1-ING.git .


# ==========================================
# ETAPA 2: INSTALAR DEPENDENCIAS Y COMPILAR
# ==========================================

FROM node:24-alpine AS build

WORKDIR /app

# Copiar archivos de configuración de Angular
COPY --from=source /repo/menu-angular/package*.json ./

# Instalar dependencias
RUN npm ci

# Copiar el proyecto Angular
COPY --from=source /repo/menu-angular/ ./

# Compilar aplicación Angular
RUN npm run build


# ==========================================
# ETAPA 3: SERVIR CON NGINX
# ==========================================

FROM nginx:alpine

# Copiar la aplicación Angular compilada
COPY --from=build /app/dist/menu-angular/browser/ /usr/share/nginx/html/

# Copiar las presentaciones individuales
COPY --from=source /repo/Dulce_Vazquez/ /usr/share/nginx/html/Dulce_Vazquez/
COPY --from=source /repo/Paola-Perez/ /usr/share/nginx/html/Paola-Perez/
COPY --from=source /repo/Naylea_Aguilar/ /usr/share/nginx/html/Naylea_Aguilar/
COPY --from=source /repo/Gustavo-Jaramillo/ /usr/share/nginx/html/Gustavo-Jaramillo/
COPY --from=source /repo/Karol-Vazquez/ /usr/share/nginx/html/Karol-Vazquez/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
