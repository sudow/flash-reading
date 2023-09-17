# Flash Reading

## Overview

This web application takes an English sentence input by the user, splits it into individual words, and displays them one by one at a specified WPM (Words per Minute).

## Setup

```bash
npm install
```

## Deploy

```bash
aws s3 cp ./src s3://flash-reading/ --recursive --region ap-northeast-1
```
