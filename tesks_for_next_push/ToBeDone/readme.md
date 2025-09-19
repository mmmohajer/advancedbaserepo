```sh
docker exec -it app-api-1 bash
python manage.py createsuperuser
```

```sh
docker exec -it app-scraper-1 bash
```

```sh
docker exec -it app-api-1 bash
fab buildgrouplist
```
