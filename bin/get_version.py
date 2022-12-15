#!/usr/bin/python3
import os
import json

def run():
    curr_dir = os.path.dirname(os.path.abspath(__file__))
    new_package_json = f"{curr_dir}/../package.json"
    with open(new_package_json, "r") as f:
        data = json.load(f)
        print(f"current version in repo is {data.get('version', '')}")
        version = data["version"].split(".")
        if len(version) > 3:
            return ".".join(version[:-1])
        return ".".join(version)

if __name__ == "__main__":
    print("Gonna get")
    run()