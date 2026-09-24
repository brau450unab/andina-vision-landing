#!/usr/bin/env bash
set -e

PROJECT_ID="gen-lang-client-0862587160"
REGION="us-west1"
SERVICE_NAME="andina-vision-landing"

echo "=== Desplegando Andina Vision Landing en Google Cloud Run ==="
echo "Proyecto: $PROJECT_ID | Región: $REGION | Servicio: $SERVICE_NAME"

gcloud run deploy "$SERVICE_NAME" \
  --source . \
  --project "$PROJECT_ID" \
  --region "$REGION" \
  --platform managed \
  --allow-unauthenticated \
  --port 8080

echo "=== Despliegue completado exitosamente ==="
