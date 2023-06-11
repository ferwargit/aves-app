import json
from django.core.management.base import BaseCommand, CommandError
from django.core.serializers import deserialize
from django.db import transaction


class Command(BaseCommand):
    help = "Load data from JSON files with non-ascii characters"

    def add_arguments(self, parser):
        parser.add_argument("file_paths", type=str, nargs="+", help="Path(s) to the JSON file(s)")

    def handle(self, *args, **options):
        file_paths = options["file_paths"]

        for file_path in file_paths:
            try:
                with open(file_path, "r", encoding="latin-1") as f:
                    data = json.load(f)
            except Exception as e:
                raise CommandError(f"Error loading JSON file {file_path}: {e}")

            try:
                with transaction.atomic():
                    for obj_data in data:
                        for obj in deserialize("json", json.dumps([obj_data], ensure_ascii=False)):
                            obj.save()
                self.stdout.write(self.style.SUCCESS(f"Successfully loaded data from {file_path}"))
            except Exception as e:
                raise CommandError(f"Error saving data from {file_path}: {e}")
