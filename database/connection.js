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
    username: "khrhmbscaqiwyi",
    password: "d46a2d5fcacc09168d07fd08d0a967c268aa4a754b477411cfc795311394c70b",
    database: "dtg1p7o6631g7",
    host: "ec2-54-87-34-201.compute-1.amazonaws.com",
    dialect: "postgres",
    ssl: true,
    url: 'postgres://khrhmbscaqiwyi:d46a2d5fcacc09168d07fd08d0a967c268aa4a754b477411cfc795311394c70b@ec2-54-87-34-201.compute-1.amazonaws.com:5432/dtg1p7o6631g7'
  },
};
