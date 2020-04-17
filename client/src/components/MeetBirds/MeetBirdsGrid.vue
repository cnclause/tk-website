<template>
    <div>
        <div id='bird-div' :key=bird.id v-for="bird in birds">
            <Bird v-if="bird.flipped || !$vuetify.breakpoint.mdAndUp && bird.bio" v-bind:bird="bird"/>
            <Family v-if="!bird.bio" v-bind:bird="bird"/>
            <FlippedBird v-if="!bird.flipped && bird.bio && $vuetify.breakpoint.mdAndUp" v-bind:bird="bird"/>
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
            thumbnail: "https://lh3.googleusercontent.com/9cOKMzEu_8Ea0lhyIewkF8VlFdjvb4EtS9S1nZo2hlMzi4dwwJXmnq2hdkja5djAbZesLSl7kd_DWhqDhVgf-_s8RBxFV8bN_L0s1kXG5MZd3QILGaYX9dOOTglm8s8R18Kv8Uu14Npk291btIpiy37RndCulEWFNKbHWwiIuuzP3e-e2DCP5wMZPzjbeUKxyDsLyxfimBxIR5Wg8I4qM5BZRP6FcSttGsvaZ9UXjle5nJYuQT3CoXuDDtvxoW5hIMo82EXFXmWn3c1bjRn7B-O5CQIqx5DZDZ0q5eK_fDeovvD1oPpxsYwzL-Meqa8U5y0TfExeu5s8ClxqQZ_YhRZsGiuyTAG5oDCnwML1mpZdmAFM4MtGvUKEZywrZVtXq_oX9iXy11XstmvXYpWlgpXChPi-Q2-rZvfiljTk997LZ1K2h8R-H95cHtIhGYPtQKqdY29JyrghKfn-9MKYMVR5C3hlCPocFOmBfTZVUUCE-MSkS951BoN0xDrP55zCmqXHu5zeeUonKDvxcCM-aebNuLwyjMqWtbtPjIVQrFxfmmmn0hFCEmJm0xyFFKWApQxrQ8eqB520wb5IPnp5FwR43WKWuGIgSNZaaPKsy3sbkKYDTxpglr5cqkHxW8trgqusEc78NwIsEFJhWrbci5EpRw7q0lirvU9TVbadMZXyULhpOpb-sshPn3VRnK8C0xqx7R-TkPezFvq4oVKJJqBHQs259Bp_eddViOY-hlS6viqkg61uiQ=s250-k-rw-no",
            flipped: true,
            lawerence: true
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
            thumbnail: "https://lh3.googleusercontent.com/SZf93P8nn3ZU7YBXHHt5FDb7xtZSf6Bvr_Ra1OGPGy38VKkzgYkfbkdpZx1GKS0XFYjPi0iXF2iMNqm6YEBipBD9ehYSGVYlVMo5vmzwBzfd7MRAtxBEyfcikuyopeDi9F4vcshpiVWgifTTKMWr5E5PBvPV8bdUAMgisUWl0VQ02Ghk9Ilt1pmH0M32fnGlDvbGY2w0FRt0uLOy5-f2EoMELc7yhZ1Imrz8_wJ4DkX2wwKRnL62DWIO1x8qEf5dKP-QpYc0R0W7ASgh-LCNezd4T1xtTSf-x0NuK0FRA1PGZTG481F4l4f6qcHGBJFlF-2SAfv9193AsZRrL5JHfsRkRJ_HyNd0pTEz4UFCgQwKDD7Z6SL1wF5aNKclpyAS_bj3oYJdDs0QklqS9B8eWo0A_wSV5iifgjEYn4qQrUTQFfGfbWUKPQDa_38HBsKqm3EXQT4bp2osTBLv_FSCXHkfKDN3lOuFYWG7T8t1He0lS6RVKsQUAL20h8_peJ0GP-_pOfOmlzL_hdeIU5A7tyNLu4KeM-MrLbD8c3uR0JKPlDxj8jkBBxruQfCwGEHnhDxyMkm7HJqKHxBQzQiugVWYc77eb57KfB4bQt5tGCLOg27xqDiYi1yOmtQKaTxhxl_EqF7kiM7Tv-ummoZx-byPCAoGIMUXcv93PfH2JKYQP865N9YMXrQR1UcwczM6tQqZovq5bdE2A5yvKEMXrmBCmtFX1AuG7FVcANNL9gwF9uhsAt1UKA=w322-h483-no"
            },
             {
            id: 5,
            name: "Gonet Volcey",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            thumbnail: "https://lh3.googleusercontent.com/7nx9msLD-HDZ4JhI2-SxbeuvwEP0Oe_fwQVGNB4l_Oxw-CGqGXBJVoiNpT7lZ3th2i4d7FlkPdZ4kdGWTvNA_KvU4UVaFp00t3jKZ4zJIin7JmRxWxmP0v0COyMLtQX_Q6AVJc9NqKFFBDXrujvtM-CxjAqn9-uh6nLXikSYdSbJSBekwKOtEqX9Om4_G7n1pWbAEYUF-pz9TPQNEh81DZZziK98W0bOOdMvSd1xTMPsX2zV9Sbpu2rzAYGP0Nh0GX74gL79uioFdttSMqOM4S_ZAPJoxiil3067PlBkH0djPCxS5580kL--rwBHteeZLekeu7mz1Hp5BHuyJ8zmU8gi0S_gah94EbCR1e9u5UkTKuKMPTDCCpsaB8_484lpIP6se3zWpFN9Z9EvkZvOmEcjsM-3XpAHI219d_v2OzaAYKWWSFGYYt7ne9CX1LEWyr8fSSFRsDydGHhxceKBn_MTTLn2XjRNlEBKtbspcrfmI-WVR78-u76iqoEh8wvuQHzl_EZy_PAfVTKfRSoHBubatTRSDamnjDJDzikS2HOV6niw8y73R1P2P0fPcFrBKSp4beMJGknskWuyvb0AlA66MbAezdkAbWuIiKKI2uMmEWpaOXO7xBkIoTN3gsJmY_C1Rf3Slt6p37J883RezDqvdISJ9xpKR-Zljt4Dn8Mbw6qEc25Q2leyK-qMkD0OFdT6WzNBmVTtTWJhfABDHg9k5Hf-yfGlH3bdaEduLLbvl_u28HVR2g=w723-h482-no",
            flipped: true
            },
            {
            id: 6,
            name: "Johnny Volcey",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            thumbnail: "https://lh3.googleusercontent.com/56uJbLoKnKpOAW-BaRYfWhfVl-4-ne9IwAru3sIpxbWLy_7-Xt_us0jubtOGvrZzNtZc6tWDLVIVu1ExocPZgaeVu6FNAwPCluS23GeXQ5f8ijq8cwDgDsrWoJ8peTJd6vpt-Qxrxl0Rj5CLeQKn1legEgykKhlVLQHAG_WhBYZ4XSEQ4Rdhy8fad28zFmf71xlC3g3GUmWpaexk_-dHqmr50Vm8CATEUs_4jOt507Eu8FNpVZA7v9XKX4kwtmrjc0JvRYnNozK7SvaEoNJLg7IrYdGjhJnqn9fl-p4Ion-41rXODyU3IPA48Oky5qC7Tta0g00gm52Bx5HF9p39WKvK3QK9DZDbQjjMgBLUrGq_MD5MTNEXzfUnN200zxW8xHotjyVTy5ll28l9h4BiYLmDu27NgArrNakZfuulxfTwWSdFZU6hVsVr5feox0hWaWLhzp7UKsfxmdLCsPgDm0bWQm6QOkGIrOq-kc_tOXpjpuztq5XPgPQqMyMXyp_ZjU8kikyOCCdIPsaIlEgkwYpwFBfmihdTY_UcAAQlrATPogKfWTVoaEIY5QtARewP-B-aS77NX-1VOT4BeCMfbRVTV_Wl17H2ilX3oEvjHXF6DWXxZVTvmnkst-Gpk_LiPjXLeS4HDMrMnhz5KBg5YOnvRMlxPYgMXlhu5khwp-EXI5u6E4lR-XGwUE3eZoeQ9jUWjamrHysbshzF-MPr3RUyc1kNnnCB7rLy8nFg-aMBjjx5fbP0Hg=w723-h482-no"
            },
            {
            id: 7,
            name: "Markenson Jean",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            thumbnail: "https://lh3.googleusercontent.com/RHzjJfAwHxa9rnCiKVxL1hD8nnZu5wyGc0Fs08iGsWzeyGiyHsyTGxICbmFgFzwJR_DHhOi69lSJM8_YXW3qMQVL-zHBsqhDXokOGS2SR12fH31ae68ytEsJZ05nYLU5FYybgO0O06bvqamfmWWKQW2cl32sBWWNaCwURxjPz9Yk3qTmVEnje9mUg-aJ07zhrqwJRNGr5M-aN2MdhPTF87ZjOYJUdI-drtS3Z4cr9rJEKHOneKRfbjbpfrAAz8Ig2i_I43jj1yIBV8eCNu3pXQKH8xxOE8LNR91d89TXmId9vLzyGpFvsZ77_4BVRa42jycHXmhBZ42MzvUMLC8v0Mj-Jjqk3_FIOP3JpcS2QrzqFJaPArWI_pAdcqfZd6O8s5DdRX8LNjMP2CSTUTiHdJoSI_xIk35GdEsKTPlQmc1_kDXNtTRUaXpzvItwVPOtQ0LV3cm0Ba2gad6tN_XcDZWYDkwz8K5RIO17OO4ZVvqrLdtpkI9xZlP0CCbai37yjMwgc7wEpKOlBcxoDP8DJeXJ97Xdh1rYsMZvavD1vJTH7aZ8z-Uujj9ufub1Ur2jOi329dR5VgCpEMkNWEG7PPvT8Git-qcZK24GOMedzgnt5ZEZIgYLKcFjT2HdpaDUjA-QIhVKYEBkuHY7UTV5kMOAnBmkDfq8TIWPsWObDwvLYdHc05wq5NDNEzZUzondEK0vXzDX8Za46fl_omDNjETDNQa0h8ydO8zL1IKPfVk2w7xugjEung=w723-h482-no",
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
            thumbnail: "https://lh3.googleusercontent.com/9XQ1DVFopleUEMJDhQbqVoNkCLKU2cWbaVY5GxzFYwEkST6F4DhkOma9iqDcbf1hru_40X_aPeYnEgt6lXIXvcjMaakXkZIjOXWBJqVLfhs-67MV6_HYuo4cpvPIMQpENAC8bv28fwQ4HFlIuIbzA6xn0Sl8RUKnZwWMNZyyKHeGGy6H26K_-k_0d1LCflizfWw0KNpo75LUxOzwF3_srgxdy8N1xBEVtUcI2TnE8da03ddDX-IdDNiTSAYe-bk6tocAUbyvdpuPA3LjOGozshlKkZGApbeT1j-pR3WGP4IXW_o2Qlv7Ljsxu0b5eGLzetkBSyqvmoIuSn4Cvn21CjVIwPNUeFRGimjTWJicXGHY5b8gXOCF_eIIU5Bc1Rzzy0pvJSXvqdZVsaIqPYt3_kZa8hsxbxBc_fRGvu-Ys0pS8NwInJGRcSDlg1X1mvUHgC2fCc9tiSw3DQ9hH5X5Imt2_sMet7PDB6bMcRKnmHyYQ2D7nkasxynRn1RsVdtDtqibejmTR6uwgdzE-jXuXtsJtwNipaK8cBTDk8DhOI2IVDAv6vo1JKFqATVrmqNjI-NRpJoZUJDidsLoxeN8wq-rDEImtH4uzWs9VYW82X78q3-G_aJ7IgKPmKe7P7ZXHV7Jyuakv3TpMcjj40b6WPNeQpZvTSyaL9pGbrBhZJ0ZPL2Gcj2_BMsNr6y2BMtlDllTfChwADE1u37dwWJlKdPE-RaTFnRCDngs_jBvurApPAJ7yLy5rw=w723-h482-no"
            },
             {
            id:10,
            name: "Darkenlove Alexandre",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            thumbnail: "https://lh3.googleusercontent.com/7v2xKnB-G4Jxqx7D6aEXZAWVQdElQgASCHEKf3BrpnQjnfKkSNpw3Zb07AUeRyt9Zjca54WGrX3JhPYggutNZ11ndCKaWUAixrRmmi1CIf6yZrxzEPhl9cNxDTqFtjIySTueTbjA8hGHDVR76tWMZjI_Ti1CXtDoSFqHPcUY5a0xFTEpQYnEy7DwnBFhPNqGIluVSuk1OlIbJP7kggZ3oFFjVwJ2i8AN2AqE1M1uy3hJkySFdsvheZV7X5-G7MYdRYoewgvh1urS7EjEe1gEHJm6Hzhgf90AABzdRs_V-30QQ-Fy5yEQw46TnLRnMHQBKUoi5V_TA-8pLcSGxHcuHUbYardZrqLg2d8YpE9J9A-MdI4GvHUaeTF0fdfHjIsZgWLkMLlwmaPbPOKMUuVdSAi3GSYyJ9FXTYc9u1nCRVCsO4Vmdr0gQOF8b55LDmzia_2LXst_Kxe52FnazeA8ZErRETixq5NnSs5Bk-IXzIspuI_ca_gokn190sL-J1YrUxNmLEvyhDENQqNmxFGrhovXqton4besVowpG2xE2P0Y7BcLeVB-BjIkspob2MlF9DOvyJQXtqudQv7fEQ4PZWNXaelrglyb4X-c0KCAqT71KVeWK20aK6Ig2eqIQymw0ox9VO-RkhVSUy4w8p4nHraQJAvRXtb_JH5U5KMHI0yZtsFezsgixrPBXGZ2bkpLvtmX1UvzdQ7fMPuj5TL1ZasRppLzNtLuIk8Dp6_ZzGbq9mputhF7tQ=w322-h482-no",
            flipped: true
            },
             {
            id:11,
            name: "Wideline Alexandre",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            thumbnail: "https://lh3.googleusercontent.com/aWMUvDodRgL79UA00ZMO2MjPElJR-If6HyFXj7zTHLV6dUrM71T_GZp9c_RRZyrAoIlOOoiJAS-0wxl4LgRBf1-ihEwarlBtBsF2JX4mJHRAvqdjOjd3FCNqeJCmGuDnsFTzlNk7IEwcCjoIcqAlgZSi64vBBgedCqvtOitGQzUaGA2qh7STZEkAlh8Ep0sR1esM6sAhYs8ms2YlRAvQb_S5EpPR00Q88lRKbORr1GA6vViQM2dJPY_yzN8xCHJGy2SonmozbzQ7YXXg6y4gO4cEj0Sv4_BDGuftd58kdwkLlMpowBbZYpZfAWnjHmY3Bkiy2GqqbYQvVGf08lWiJNcUS6JG16IettgIsL_XuziGOVeSKRbRf27KnRS91onq5ANEXWNxo2LURjrZrXzAeCD6RsrXAUXOY3GMDvYjZRIhTHoec6s6v_vlLwZoDCv4r6L-WJRxvm8EJBwNpzk5I060vSkP2Jmu31FJdcaVS79HgMrNXNaSKGu3vzKuTO37j7h8BwEtadGsQCzKQSeDqXpdlkdKMa_NUMUvWBfbNCKasiZqcfCU_XgeRJFETQ2hPxYIz-NyeudTjqc2-qy_-Ap8jGFzFI-DXQHEoujDcs6hjiC5FFdkrxTqhRF6CAZUlrqzizxFwTmJFPz1-V48Tf3TzETQYRvJ93mlwNwGOBpPg1ISpAjD_j-pym_1OuA3AK8MuE2leS-Ik6feBNQJiBQgEmUJUHT-ftAMeZ_0bDFb1xaprPvK9Q=w723-h482-no"
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