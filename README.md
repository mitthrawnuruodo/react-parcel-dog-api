# Workalong: Using the Using Dog API

## Initialize

```sh
npm i
```

## Start the Development Server:

```sh
npm start
```

## API

We'll be using the [Dog CEO's Dog API](https://dog.ceo/dog-api/), which provides random dog images and breed information.

The API endpoint https://dog.ceo/api/breeds/image/random/12 fetches 12 random dog images:

```json
{
  "message": [
    "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
    "https://images.dog.ceo/breeds/hound-basset/n02088238_10074.jpg",
    ...
  ],
  "status": "success"
}
```