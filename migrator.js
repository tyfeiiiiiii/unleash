'use strict';

const { getInstance } = require('db-migrate');
const parseDbUrl = require('parse-database-url');
require('db-migrate-shared').log.silence(true);

function migrateDb ({ databaseUrl, databaseSchema = 'public' }) {
    const custom = parseDbUrl(databaseUrl);
    custom.schema = databaseSchema;
    const dbmigrate = getInstance(true, {
        cwd: __dirname,
        config: { custom },
        env: 'custom' }
    );
    return dbmigrate.up();
}

module.exports = migrateDb;
