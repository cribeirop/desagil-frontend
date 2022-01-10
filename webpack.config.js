const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
    const config = await createExpoWebpackConfigAsync({
        ...env,
        babel: {
            dangerouslyAddModulePathsToTranspile: [
                '@hashiprobr/react-native-paper-icon',
                '@hashiprobr/react-native-paper-datetimepicker',
                '@hashiprobr/expo-pdf-reader',
                '@hashiprobr/expo-three-view',
            ],
        },
    }, argv);
    return config;
};
