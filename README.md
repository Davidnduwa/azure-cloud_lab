# AZ‑900 Landing Zone – Flask

A simple Flask + Tailwind landing page for Azure App Service.

## Run locally
```bash
pip install -r requirements.txt
python app.py
```

## Deploy to Azure App Service
```bash
az webapp up -n <app-name> -g <resource-group> --sku B1 --runtime "PYTHON:3.11"
```
