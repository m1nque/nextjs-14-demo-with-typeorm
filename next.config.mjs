import "reflect-metadata";
import FilterWarningsPlugin from 'webpack-filter-warnings-plugin'

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverComponentsExternalPackages: [
            'typeorm'
        ]
    },
    webpack: (config, { isServer, webpack }) => {
    //     // if (!isServer) {
    //         config.plugins = [
    //             ...config.plugins,
    //             new webpack.NormalModuleReplacementPlugin(/typeorm$/, function (result) {
    //                 result.request = result.request.replace(/typeorm/, 'typeorm/browser');
    //             }),
    //         ];
    //     // }

        config.plugins = [
            ...config.plugins,
            new FilterWarningsPlugin({
                exclude: [/mongodb/, /mssql/, /oracledb/, /pg/, /pg-native/, /pg-query-stream/, /react-native-sqlite-storage/, /redis/, /sqlite3/, /sql.js/, /typeorm-aurora-data-api-driver/]
            })
        ]

        return config;
    },
};

export default nextConfig;
