<template>
    <div>
        <div id='bird-div' :key=bird.id v-for="bird in birds">
            <Bird v-if="bird.flipped" v-bind:bird="bird"/>
            <Family v-if="!bird.bio" v-bind:bird="bird"/>
            <FlippedBird v-if="!bird.flipped && bird.bio" v-bind:bird="bird"/>
        </div>
    </div>
</template>

<script>
    import Bird from './Bird'
    import FlippedBird from './FlippedBird'
    import Family from './Family'
    export default {
        name: "meetBirdsGrid",
        components: {
            Bird,
            FlippedBird,
            Family
        },
        data() {
    return {
      birds:
          [
            {
            id: 1,
            name: "Charma Fleurelus",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            thumbnail: "https://lh3.googleusercontent.com/8r5nfyXWCC2_nwgu-xelM82z2WIkUKlLa01SbyX4cUjuign9W_oECPCkPySc7b_a34inS9KBDWR2NYBXx-QpL8XQ8Jad_tgkGlo8j_y3HjCfbfLlcGFTir2S1E-P_9RoLFLH8XangrBpE-zljFZd4-HwP3FNUBVFWJaUzMhDNdcFKKdJKf64HX6Z_Z2k8RRS-yaDKu3-kUY_AtuxZHV9X3J-YHBjUy_Em2VNtyOxll1yMPGRVsJ-PWwdbxBgEs99TEGjSObnjNQTte4bSFAPUBM146z6svEsc2F1jKUul-hDJx0Y6WQQCwqheoApl1C7QFAAYTWdBRHnC4N7XAfe7IlMNX7EPcZTn-rGs66ZXWKB60uwrEafyFgXtjeckocw6TTcIUfX92Kf6DilOKooZPjUDHpBiFr_vi0Md7ckBk-KFgLJXGYf-Hh0fsygqV5E6FLZZN0A8v95dYjti1azQhwL0Sd6jhWTmfI3y9Oc9MRa3R6NCQfV8RGuV2zmNn8kefBCRC-ys4jD1jhvfZX1WwRL_mBaxHcPcPP006s0voTYSba6tas2k0R_LUPKiZwjzcI1d12qKFWp5imea4Pp7hXd3Ba-L34-a9Gl7Da1mGbtcbiOcVd7ZkJKO4rD4rarEbPCFnTzXLD4vGCF9O5tNaVrZQjhRKs8W2cy0PQB_25FUO9-x0hozedurZVOPLxIa18mvkvzMvt7O6uuo0xV2U6oEw36dvPxTWuoJiRhg5ldxgSpV9z_uA=w376-h563-no"},
            {
            id: 2,
            name: "Lawerence Nelson",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            thumbnail: "https://lh3.googleusercontent.com/RkAXoSGuKaOdXVZ-02gUvwmLvAoOvn3fNOdhuU-RkxuMBq3vblpDzcPIXoi1XqaNSkyLIQ413_cXQ-msza7QWR0rdTjWBkuu5FKhUUeeHtxtehYvy8CgtAV8-_Uj6jKA-c8bWclxuhnLJIqbNHWAf6fW3rewCuKkl8YoqG33AB6_o6rlA2wX6_HI9TZyrZErUOvII_Dq_mjG58t7pb2icN3L0OG28ZCEAVrzrf00Fqc9Ue1DZeDZBlmBvecV_0j9FQQy178v4bD-FRZwj79D9_xfaliH0EsgK3AiNzdH4anv43NAZMagLrS87sLBYSGZkefSF5MU-W2LBI2AmOGRdB_DKOOOuApcOMeLhnid0dYANshjhFCXhw_8QGPTEn9KFvKAnuhY-wbPVqa_KHRfDmF7gsFZV0GnCZl5sV_PGLz8TxEjQ2EGSdvrstdBWtghJhpecoxsSTo7Nban7xzYuViv-VfjchdpSfPPkDrauMaPXT-LH-MmYA80Eszrkd1DDRpY4q09z6xJUugcw1gvyUmJ6SsPd163JxGcG9saQt1XtvD9z4dgH15WKyAtAJGOUYMlXOcRqgK7C7iHcY0Vo_Lu1B47PBO9nLWyQVTnebxntvvOF2qLHj7pAS0S5hJSVGu1Y_jUd2aO43waewmNMF1SOvKPUZHbA5ZKuyIPLqUOSuj1r4Ilx6Njzc7lLlXZQKB-epcSDtRuRoWpZR15HnMtEQCWj1aU-4TlFtX0XjYmKT04U8j0_w=w845-h563-no",
            flipped: true,
            },
            {
            id: 3,
            name: "Volcey Family",
            thumbnail: "https://lh3.googleusercontent.com/9YLGf6DQhtW2Hb2RVPKG8ThOGmzddtx2WSEAhbI4_p05BfwNONu3GBOWtmavsgX-5X8cfwt39qf5pMC79t3WPOrcGvWKJGovcXPcPkRiroS2AN8tbsERkTeGM_uVjzpvxX9Em7VaK99BkMvrzYhNm8Q-ZUaqWlFtTX7YbSSs9j0IIGu5gBdre4qw9N-hu_9gnRQUvDpLaoOdTGRtioyI261Y2MqXJx6iYtVEa4NDioYNfGq8nrFTbeWULbWrPXyjKF9Be9VLJc6H8qA4PsdYHwtILiMry5Ks7-E6LXqvE14cGz0NJ1yht5Tx92VH5TSD_-QtfNlguloWyw6NMipjVtFkx6deo0ZL0o3XOB4WCiKE-3tBJPqp4uRfBkfQSeFWIROxAhxf96Vp8CsZ_Bv9uIMLLRG-QBt8XYCmTzwh8tQlnig8T4PSKsVqXSHPAIk58NqM5Y-GYI9zOMYAe-Rt-Mjrkp2RYA_UaDdaGc9i0PWgHRjHvk2l4Ai-Q49pk36fUKn1Ni3s0CELvcvkLl2eSMRafjpcqFCppSEOzJjNUkfw2ZxIVcAXg1uzW5Y4sC-Jd0_0WQh7XvBGpCqA0ZfII7acoCsv18TBE6mJSImpdlgXXAaqmAxYPq0W86Ljj6sJ2Yztuj6PlGhHKJj5_oj1ENaNQWAnUUR2FFTx_4zFMXrHg4hNLOMXT-6CnhxSOIh0cRC3PDWFn38Nq6XBHuwFSubyyrp5zsslXGe8iG47iFcOumU0cgKBjw=w845-h563-no"
            },
             {
            id: 4,
            name: "Genise Volcey",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            thumbnail: "https://lh3.googleusercontent.com/8r5nfyXWCC2_nwgu-xelM82z2WIkUKlLa01SbyX4cUjuign9W_oECPCkPySc7b_a34inS9KBDWR2NYBXx-QpL8XQ8Jad_tgkGlo8j_y3HjCfbfLlcGFTir2S1E-P_9RoLFLH8XangrBpE-zljFZd4-HwP3FNUBVFWJaUzMhDNdcFKKdJKf64HX6Z_Z2k8RRS-yaDKu3-kUY_AtuxZHV9X3J-YHBjUy_Em2VNtyOxll1yMPGRVsJ-PWwdbxBgEs99TEGjSObnjNQTte4bSFAPUBM146z6svEsc2F1jKUul-hDJx0Y6WQQCwqheoApl1C7QFAAYTWdBRHnC4N7XAfe7IlMNX7EPcZTn-rGs66ZXWKB60uwrEafyFgXtjeckocw6TTcIUfX92Kf6DilOKooZPjUDHpBiFr_vi0Md7ckBk-KFgLJXGYf-Hh0fsygqV5E6FLZZN0A8v95dYjti1azQhwL0Sd6jhWTmfI3y9Oc9MRa3R6NCQfV8RGuV2zmNn8kefBCRC-ys4jD1jhvfZX1WwRL_mBaxHcPcPP006s0voTYSba6tas2k0R_LUPKiZwjzcI1d12qKFWp5imea4Pp7hXd3Ba-L34-a9Gl7Da1mGbtcbiOcVd7ZkJKO4rD4rarEbPCFnTzXLD4vGCF9O5tNaVrZQjhRKs8W2cy0PQB_25FUO9-x0hozedurZVOPLxIa18mvkvzMvt7O6uuo0xV2U6oEw36dvPxTWuoJiRhg5ldxgSpV9z_uA=w376-h563-no"
            },
             {
            id: 5,
            name: "Gonet Volcey",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            thumbnail: "https://lh3.googleusercontent.com/RkAXoSGuKaOdXVZ-02gUvwmLvAoOvn3fNOdhuU-RkxuMBq3vblpDzcPIXoi1XqaNSkyLIQ413_cXQ-msza7QWR0rdTjWBkuu5FKhUUeeHtxtehYvy8CgtAV8-_Uj6jKA-c8bWclxuhnLJIqbNHWAf6fW3rewCuKkl8YoqG33AB6_o6rlA2wX6_HI9TZyrZErUOvII_Dq_mjG58t7pb2icN3L0OG28ZCEAVrzrf00Fqc9Ue1DZeDZBlmBvecV_0j9FQQy178v4bD-FRZwj79D9_xfaliH0EsgK3AiNzdH4anv43NAZMagLrS87sLBYSGZkefSF5MU-W2LBI2AmOGRdB_DKOOOuApcOMeLhnid0dYANshjhFCXhw_8QGPTEn9KFvKAnuhY-wbPVqa_KHRfDmF7gsFZV0GnCZl5sV_PGLz8TxEjQ2EGSdvrstdBWtghJhpecoxsSTo7Nban7xzYuViv-VfjchdpSfPPkDrauMaPXT-LH-MmYA80Eszrkd1DDRpY4q09z6xJUugcw1gvyUmJ6SsPd163JxGcG9saQt1XtvD9z4dgH15WKyAtAJGOUYMlXOcRqgK7C7iHcY0Vo_Lu1B47PBO9nLWyQVTnebxntvvOF2qLHj7pAS0S5hJSVGu1Y_jUd2aO43waewmNMF1SOvKPUZHbA5ZKuyIPLqUOSuj1r4Ilx6Njzc7lLlXZQKB-epcSDtRuRoWpZR15HnMtEQCWj1aU-4TlFtX0XjYmKT04U8j0_w=w845-h563-no",
            flipped: true
            },
            {
            id: 6,
            name: "Johnny Volcey",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            thumbnail: "https://lh3.googleusercontent.com/RkAXoSGuKaOdXVZ-02gUvwmLvAoOvn3fNOdhuU-RkxuMBq3vblpDzcPIXoi1XqaNSkyLIQ413_cXQ-msza7QWR0rdTjWBkuu5FKhUUeeHtxtehYvy8CgtAV8-_Uj6jKA-c8bWclxuhnLJIqbNHWAf6fW3rewCuKkl8YoqG33AB6_o6rlA2wX6_HI9TZyrZErUOvII_Dq_mjG58t7pb2icN3L0OG28ZCEAVrzrf00Fqc9Ue1DZeDZBlmBvecV_0j9FQQy178v4bD-FRZwj79D9_xfaliH0EsgK3AiNzdH4anv43NAZMagLrS87sLBYSGZkefSF5MU-W2LBI2AmOGRdB_DKOOOuApcOMeLhnid0dYANshjhFCXhw_8QGPTEn9KFvKAnuhY-wbPVqa_KHRfDmF7gsFZV0GnCZl5sV_PGLz8TxEjQ2EGSdvrstdBWtghJhpecoxsSTo7Nban7xzYuViv-VfjchdpSfPPkDrauMaPXT-LH-MmYA80Eszrkd1DDRpY4q09z6xJUugcw1gvyUmJ6SsPd163JxGcG9saQt1XtvD9z4dgH15WKyAtAJGOUYMlXOcRqgK7C7iHcY0Vo_Lu1B47PBO9nLWyQVTnebxntvvOF2qLHj7pAS0S5hJSVGu1Y_jUd2aO43waewmNMF1SOvKPUZHbA5ZKuyIPLqUOSuj1r4Ilx6Njzc7lLlXZQKB-epcSDtRuRoWpZR15HnMtEQCWj1aU-4TlFtX0XjYmKT04U8j0_w=w845-h563-no"
            },
            {
            id: 7,
            name: "Markenson Jean",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            thumbnail: "https://lh3.googleusercontent.com/RkAXoSGuKaOdXVZ-02gUvwmLvAoOvn3fNOdhuU-RkxuMBq3vblpDzcPIXoi1XqaNSkyLIQ413_cXQ-msza7QWR0rdTjWBkuu5FKhUUeeHtxtehYvy8CgtAV8-_Uj6jKA-c8bWclxuhnLJIqbNHWAf6fW3rewCuKkl8YoqG33AB6_o6rlA2wX6_HI9TZyrZErUOvII_Dq_mjG58t7pb2icN3L0OG28ZCEAVrzrf00Fqc9Ue1DZeDZBlmBvecV_0j9FQQy178v4bD-FRZwj79D9_xfaliH0EsgK3AiNzdH4anv43NAZMagLrS87sLBYSGZkefSF5MU-W2LBI2AmOGRdB_DKOOOuApcOMeLhnid0dYANshjhFCXhw_8QGPTEn9KFvKAnuhY-wbPVqa_KHRfDmF7gsFZV0GnCZl5sV_PGLz8TxEjQ2EGSdvrstdBWtghJhpecoxsSTo7Nban7xzYuViv-VfjchdpSfPPkDrauMaPXT-LH-MmYA80Eszrkd1DDRpY4q09z6xJUugcw1gvyUmJ6SsPd163JxGcG9saQt1XtvD9z4dgH15WKyAtAJGOUYMlXOcRqgK7C7iHcY0Vo_Lu1B47PBO9nLWyQVTnebxntvvOF2qLHj7pAS0S5hJSVGu1Y_jUd2aO43waewmNMF1SOvKPUZHbA5ZKuyIPLqUOSuj1r4Ilx6Njzc7lLlXZQKB-epcSDtRuRoWpZR15HnMtEQCWj1aU-4TlFtX0XjYmKT04U8j0_w=w845-h563-no",
            flipped: true
            },
            {
            id:8,
            name: "Alexandre Family",
            thumbnail: "https://lh3.googleusercontent.com/9YLGf6DQhtW2Hb2RVPKG8ThOGmzddtx2WSEAhbI4_p05BfwNONu3GBOWtmavsgX-5X8cfwt39qf5pMC79t3WPOrcGvWKJGovcXPcPkRiroS2AN8tbsERkTeGM_uVjzpvxX9Em7VaK99BkMvrzYhNm8Q-ZUaqWlFtTX7YbSSs9j0IIGu5gBdre4qw9N-hu_9gnRQUvDpLaoOdTGRtioyI261Y2MqXJx6iYtVEa4NDioYNfGq8nrFTbeWULbWrPXyjKF9Be9VLJc6H8qA4PsdYHwtILiMry5Ks7-E6LXqvE14cGz0NJ1yht5Tx92VH5TSD_-QtfNlguloWyw6NMipjVtFkx6deo0ZL0o3XOB4WCiKE-3tBJPqp4uRfBkfQSeFWIROxAhxf96Vp8CsZ_Bv9uIMLLRG-QBt8XYCmTzwh8tQlnig8T4PSKsVqXSHPAIk58NqM5Y-GYI9zOMYAe-Rt-Mjrkp2RYA_UaDdaGc9i0PWgHRjHvk2l4Ai-Q49pk36fUKn1Ni3s0CELvcvkLl2eSMRafjpcqFCppSEOzJjNUkfw2ZxIVcAXg1uzW5Y4sC-Jd0_0WQh7XvBGpCqA0ZfII7acoCsv18TBE6mJSImpdlgXXAaqmAxYPq0W86Ljj6sJ2Yztuj6PlGhHKJj5_oj1ENaNQWAnUUR2FFTx_4zFMXrHg4hNLOMXT-6CnhxSOIh0cRC3PDWFn38Nq6XBHuwFSubyyrp5zsslXGe8iG47iFcOumU0cgKBjw=w845-h563-no"
            },
            {
            id:9,
            name: "Christiana Alexandre",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            thumbnail: "https://lh3.googleusercontent.com/8r5nfyXWCC2_nwgu-xelM82z2WIkUKlLa01SbyX4cUjuign9W_oECPCkPySc7b_a34inS9KBDWR2NYBXx-QpL8XQ8Jad_tgkGlo8j_y3HjCfbfLlcGFTir2S1E-P_9RoLFLH8XangrBpE-zljFZd4-HwP3FNUBVFWJaUzMhDNdcFKKdJKf64HX6Z_Z2k8RRS-yaDKu3-kUY_AtuxZHV9X3J-YHBjUy_Em2VNtyOxll1yMPGRVsJ-PWwdbxBgEs99TEGjSObnjNQTte4bSFAPUBM146z6svEsc2F1jKUul-hDJx0Y6WQQCwqheoApl1C7QFAAYTWdBRHnC4N7XAfe7IlMNX7EPcZTn-rGs66ZXWKB60uwrEafyFgXtjeckocw6TTcIUfX92Kf6DilOKooZPjUDHpBiFr_vi0Md7ckBk-KFgLJXGYf-Hh0fsygqV5E6FLZZN0A8v95dYjti1azQhwL0Sd6jhWTmfI3y9Oc9MRa3R6NCQfV8RGuV2zmNn8kefBCRC-ys4jD1jhvfZX1WwRL_mBaxHcPcPP006s0voTYSba6tas2k0R_LUPKiZwjzcI1d12qKFWp5imea4Pp7hXd3Ba-L34-a9Gl7Da1mGbtcbiOcVd7ZkJKO4rD4rarEbPCFnTzXLD4vGCF9O5tNaVrZQjhRKs8W2cy0PQB_25FUO9-x0hozedurZVOPLxIa18mvkvzMvt7O6uuo0xV2U6oEw36dvPxTWuoJiRhg5ldxgSpV9z_uA=w376-h563-no"
            },
             {
            id:10,
            name: "Darkenlove Alexandre",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            thumbnail: "https://lh3.googleusercontent.com/8r5nfyXWCC2_nwgu-xelM82z2WIkUKlLa01SbyX4cUjuign9W_oECPCkPySc7b_a34inS9KBDWR2NYBXx-QpL8XQ8Jad_tgkGlo8j_y3HjCfbfLlcGFTir2S1E-P_9RoLFLH8XangrBpE-zljFZd4-HwP3FNUBVFWJaUzMhDNdcFKKdJKf64HX6Z_Z2k8RRS-yaDKu3-kUY_AtuxZHV9X3J-YHBjUy_Em2VNtyOxll1yMPGRVsJ-PWwdbxBgEs99TEGjSObnjNQTte4bSFAPUBM146z6svEsc2F1jKUul-hDJx0Y6WQQCwqheoApl1C7QFAAYTWdBRHnC4N7XAfe7IlMNX7EPcZTn-rGs66ZXWKB60uwrEafyFgXtjeckocw6TTcIUfX92Kf6DilOKooZPjUDHpBiFr_vi0Md7ckBk-KFgLJXGYf-Hh0fsygqV5E6FLZZN0A8v95dYjti1azQhwL0Sd6jhWTmfI3y9Oc9MRa3R6NCQfV8RGuV2zmNn8kefBCRC-ys4jD1jhvfZX1WwRL_mBaxHcPcPP006s0voTYSba6tas2k0R_LUPKiZwjzcI1d12qKFWp5imea4Pp7hXd3Ba-L34-a9Gl7Da1mGbtcbiOcVd7ZkJKO4rD4rarEbPCFnTzXLD4vGCF9O5tNaVrZQjhRKs8W2cy0PQB_25FUO9-x0hozedurZVOPLxIa18mvkvzMvt7O6uuo0xV2U6oEw36dvPxTWuoJiRhg5ldxgSpV9z_uA=w376-h563-no",
            flipped: true
            },
             {
            id:11,
            name: "Wideline Alexandre",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            thumbnail: "https://lh3.googleusercontent.com/8r5nfyXWCC2_nwgu-xelM82z2WIkUKlLa01SbyX4cUjuign9W_oECPCkPySc7b_a34inS9KBDWR2NYBXx-QpL8XQ8Jad_tgkGlo8j_y3HjCfbfLlcGFTir2S1E-P_9RoLFLH8XangrBpE-zljFZd4-HwP3FNUBVFWJaUzMhDNdcFKKdJKf64HX6Z_Z2k8RRS-yaDKu3-kUY_AtuxZHV9X3J-YHBjUy_Em2VNtyOxll1yMPGRVsJ-PWwdbxBgEs99TEGjSObnjNQTte4bSFAPUBM146z6svEsc2F1jKUul-hDJx0Y6WQQCwqheoApl1C7QFAAYTWdBRHnC4N7XAfe7IlMNX7EPcZTn-rGs66ZXWKB60uwrEafyFgXtjeckocw6TTcIUfX92Kf6DilOKooZPjUDHpBiFr_vi0Md7ckBk-KFgLJXGYf-Hh0fsygqV5E6FLZZN0A8v95dYjti1azQhwL0Sd6jhWTmfI3y9Oc9MRa3R6NCQfV8RGuV2zmNn8kefBCRC-ys4jD1jhvfZX1WwRL_mBaxHcPcPP006s0voTYSba6tas2k0R_LUPKiZwjzcI1d12qKFWp5imea4Pp7hXd3Ba-L34-a9Gl7Da1mGbtcbiOcVd7ZkJKO4rD4rarEbPCFnTzXLD4vGCF9O5tNaVrZQjhRKs8W2cy0PQB_25FUO9-x0hozedurZVOPLxIa18mvkvzMvt7O6uuo0xV2U6oEw36dvPxTWuoJiRhg5ldxgSpV9z_uA=w376-h563-no"
            },
          ]
      }
  },
    }
</script>

<style lang="scss" scoped>
   bird-div{
       padding: 0%;
   }
</style>