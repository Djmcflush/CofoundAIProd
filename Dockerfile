FROM python:slim

# Install system-level dependencies
RUN apt-get update && apt-get install -y build-essential portaudio19-dev libffi-dev libssl-dev ffmpeg

WORKDIR /cofound_ai

# Install Python dependencies
COPY requirements.txt /cofound_ai
RUN pip install -r /cofound_ai/requirements.txt

# Copy the project files
COPY ./ /cofound_ai

# Expose 8000 port from the docker image.
EXPOSE 8000

# Make the entrypoint script executable
RUN chmod +x /cofound_ai/entrypoint.sh

# Run the application
CMD ["/bin/sh", "/cofound_ai/entrypoint.sh"]
