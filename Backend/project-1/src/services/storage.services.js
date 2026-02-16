const ImageKit =  require('@imagekit/nodejs');

const client = new ImageKit({
  privateKey: process.env['IMAGEKIT_PRIVATE_KEY'],
});

async function uploadImage (buffer) {
    const result = await imagekit.client.upload({
        file : buffer,
        filename : "image.jpg"
    })

    return result;
}

module.exports = uploadImage;