#!/bin/sh
set -e
alembic upgrade head
uvicorn cofound_ai.main:app --host 0.0.0.0
