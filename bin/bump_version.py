#!/usr/bin/python3
import json
import os
import sys

def run():
    if len(sys.argv) < 2:
        print("No version is specified, do nothing")
        return
    args = sys.argv[1]
    curr_dir = os.path.dirname(os.path.abspath(__file__))
    new_package_json = f"{curr_dir}/../package.json"
    with open(new_package_json, "r") as f:
        data = json.load(f)
        data["version"] = f'{args}.0'
    os.remove(new_package_json)
    with open(new_package_json, "w") as f:
        json.dump(data, f, indent=4)

    new_osd_json = f"{curr_dir}/../opensearch_dashboards.json"
    with open(new_osd_json, "r") as f:
        data = json.load(f)
        data["version"] = f'{args}.0'
        data["opensearchDashboardsVersion"] = f'{args}'
    os.remove(new_osd_json)
    with open(new_osd_json, "w") as f:
        json.dump(data, f, indent = 4)

if __name__ == "__main__":
    print("#####running script to bump plugin version#####")
    run()