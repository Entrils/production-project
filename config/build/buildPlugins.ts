import path from 'path';
import webpack from 'webpack'
import HTMLWebpackPlugin from 'html-webpack-plugin'
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';


export function buildPlugins({paths, isDev}: BuildOptions): webpack.WebpackPluginInstance[] {
    const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

    const plugins = [
        new HTMLWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }
        ),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        }),
    ]
    if (isDev){
    plugins.push(
        new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
    new BundleAnalyzerPlugin({
        openAnalyzer: false,
    }),)}


    return plugins
}