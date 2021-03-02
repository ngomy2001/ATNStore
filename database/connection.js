module.exports = {
    development: {
        username: "postgres",
        password: "deadcenter123",
        database: "ASM2_PHAMTRUNGNAM_ATN",
        host: "localhost",
        dialect: "postgres",
    },
    test: {
        username: "root",
        password: "11223311",
        database: "mati_test",
        host: "172.15.0.2",
        dialect: "postgres",
    },
    production: {
        username: "jcectkoghywbdc",
        password: "08e926a8987d0ad52ce9f88eb56644ab7c2938e534a0f3a513eb03b267ad5aad",
        database: "d74jr2g15tqguc",
        host: "ec2-18-211-97-89.compute-1.amazonaws.com",
        dialect: "postgres",
        ssl: true,
        url: 'postgres://jcectkoghywbdc:08e926a8987d0ad52ce9f88eb56644ab7c2938e534a0f3a513eb03b267ad5aad@ec2-18-211-97-89.compute-1.amazonaws.com:5432/d74jr2g15tqguc'
    },
};