FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY dist/ExpenseTrackerApp/ /usr/share/nginx/html