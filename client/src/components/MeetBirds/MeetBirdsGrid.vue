<template>
    <div class="meet-bird-grid">
        <div class='meet-bird-container' :key="bird.id" v-for="bird in birds">
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
            thumbnail: "https://lh3.googleusercontent.com/0eNfYytzOGRo1h74jmX57SmCU3PgCCXzVoec7HybySEc99rZvS7m-6k-QjQWlkcO3f4MBtjDRGvsfhcDVv786rkwqhDKbSfRkXG6Cl39ldhKkIYzh0T15BfxkciBxGGoNlf8ZkDoEPWJBUIyPZpwxrbk1EKSCUg3sqmZ3XT4doQTyOCR8acGTeW5lWw5EZdZS4Kf_oJG_k_4OX8srFnC1GDYBFlHSL1KussCPZ91sKXAxeUsjbG21DouFJA931gUApvKaoOamev8Q1h9ChYztfnDcj_frjhcxKFaAg4H_avdLOVnnKtUg3G9ZWeRUj1oAGBuVXUhkK0NjQ1DVgxXxr4HTeAM9vWsFNjyO2zI7ilW0VzYHTpmtPDk9BbODl01Ai83QhvleHrhn1SJgNq9xNGFtqeaMOmlZ1mfGly5XkdHoJSjp_3F2PKZsyxCB9KYgXi7_4E0Aen_Wlt1Fr-Es_AVPKje_ONCnZI-rztADlPB854DGlFWfzfwcgnOnB7FVqpYFPvwOnInkavobaFQRKwa2qDPk-W1wPegTr8Rk4KIwZEUHTyXXR0EgM-rb0AUsd5ktTXRZVQbhpc3C8UUeSdQHCwIgVkn4I36ne9FNmjg8fE3Zm5x8Nr2woPQJvL8SLaL7wm5qRC8JO96tvMhpqHAqc7P43d32uPcF0juBX8AXgLRxtOiBLdDoGhYxM6yvayX3X5gMIKcn1nYRw_83uu7A305kN22u_ac_gHCuJZ7Ptrty_nUbzQ=w462-h308-no"},
            {
            id: 2,
            name: "Lawerence Nelson",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            thumbnail: "https://lh3.googleusercontent.com/orKt-KME42mz6FhMfUOGcRSIN1XNWcZ6AaTmeGVO2eDM45pICDJnXKWU3naHZuV5xLGh2AX9NbB8yUl7In6XGPkRAZNevPOrYIT6L8meXI_tncs1ee7YPxI5MIdmtDYlY1CzhvzMkNnX9VchTpN3xrS-DlzVNWTbCoQkizGMkf00dyW0ICfkg30ZHSDPOYp6GCBLavbOeiXELU2mGvd7_pQsQ-z-vmxI9IH029U_UzM3cOnooSpjNml_iKF5Y7BwDlvfYUwkTkyD_CG3rmC6QcFC8qQBx8rYAdBzbTeyMhxqRzj3xZQvvRu2wozII1NyeU-EblxqMsrvaaBsDsgLuqyMr3Q5hWVhzRCR4rC56teBRLXkd7nL3ZYuNQEGsVpZkMR5bapi7xkwfhW6W-xucVAAs7bsOslPUtydwUxy28xw7x9alX3AgaOwRSKAImFk03GXqqe4Bv0kH40bzBjQq57vz_uc8xRRsEjRQH09C9kRUaYlTYtUg-0FUjHFeTEgNEhbZ-IsVz50LRusECuAZO1b9VYfuvLfs4t6MfeFjVWMjGAtjZnBoiHps5X7axk_ARMVR2gvMfyNkVfRXRb0zCRUjWPtrWGAeMseNp8wvs6rpFZ7U15u7J4Ekz6MLjDjqcB7u0-Uu3TE5k2Smr86GXWBGcedL3E6vNybdFO8FX_PgnIsGWMsEtMz0la6YptTOwojyp9mFvgucR__c8HjC-KGIRjmBEpYl0bFUTaaItpoEuksBbNDSoI=w567-h377-no",
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
            thumbnail: "https://lh3.googleusercontent.com/QaoDgRz6mqJn6nvmqLuRfQPlWWa6FIeNqYrM573u46rBviWG4c-yYZ-ml9t3-cuRJwjX5d7XaCxoVd9QNef93DFDQSbjCZiOikcxpN-p4RxRcJf45DPDKvomXv-LE4c2h_c5I09PcVWny6ed7FWc8YmIrvC1Cwcm0UBAXfwZVpbObU7u5W4SCEmcPq4d0mbDQTUmSNU3cs3LZcu4H-Q_QxXPjFDJ2gGOUaP4c4DYNUDGx3yAJfgzctkKeQp2-7Cn4gBjddQdemvM2Uq2UBCbley4UUxD2jZ6Gr-5hKzxTEXsf4tasNGHhMYfDZa5gacM7V8GBjtjJbhP6NvWa2UkrajWxk-Af5DYFJIgrUp0jtc7-WAvQ1qsa0kE8eEfj3IEKFpgHH4n6nkljr-t8N4rW_mSlC3SpQDUL6iHpX6vtuO3UaPfsFyH5MihY9LebojdZ25ZyzOJpQb_LBe2wP9gsMqXTrJ6_ObTDml7snobR1-oe-9mtuWMB7nGju7FmNy-gwylpE0DlNkyAhJgZ7w78TlEQ564LllHGRzNTjt-r_uP5YqM2fPumMu9j3eYAQqG1i7s39PRTY64KsCVI8Mv3Z84O9luWYadX3eFXBpYcvJSohLG3Ohq02MS1owNH-zuZTrynB7JbSBVxjBFG6K5jwKmevyT4ZX6klDzHIrO0PEDQ26jSRQox0DXiblxCmDcQP1h9S_vU8naNqcIkRGEpQe17ySuNJ4QPesSu-5lhwOnodroyn8J6mg=w461-h308-no"
            },
             {
            id: 5,
            name: "Gonet Volcey",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            thumbnail: "https://lh3.googleusercontent.com/cO_OfVDso7_BLTHrkXRHl8c-7m1S8VRPrOtUytUkexdeBwc9ZAM7Jitk_eeVq7ycsSh7I7tcVZAFKPVTC-lGPcVt1cp4bPT2ghbZ8awGcYA_uw7GqjtUQHRKBWNjdZbnfIXzkdXrBE3kBg-rUiUhQKurhh9mdSxg4TlbkUQ7YGWODIynCmMDDuL6rfbJsu1R2IAmzw74nwu8WxNg-NeqnYRJk-PjM3aBPgRrEr9gOVrz7Rr96viHobTDiVj03QOGq0UfVTMmdynci5qAiBScxr8izKUc7SjD58UqD0P3cPHsnf3iaGErdt3gsXg-zzAHws-T_oP6ugHVu_DCITe4MlrqbfGhH5M8hpuU_IhsgVAsujDo7TEC5BjQkHpw2rjP6DCl3EPLHtIyrQIvh8wp13iGzk8o1dNrNh9hZJO4uiZPs8AdZhMFAjOppQJv--gPo2-dfOXoq8O82dcbhBTv-IZfPsTAKDcZ_8f898mhFi0sQQNewFpC_h2XojmBE9sAztZfM2ZOkVNkibjr2_LKJZ0_V0sspIDwtYlevNpiP4tlQOKg-9FI5xQ3t0Guz_CG56-4lKFcQwocbnro2n_pU0nLlORkxLSz2TtkNMsJEgsiOz3Es_3CYJYgzARVy8i4vqivNqOhCJzhKf7blI5-DZKSHcKrssK_nRliWqd6vA9lY6BHHGJrzU5jED3NvEd754OgeO67qVzUwsdSzhoq2GQwGcOr6mwSXunTV99hAAl1h14vUQZEfXc=w2002-h1334-no",
            flipped: true
            },
            {
            id: 6,
            name: "Johnny Volcey",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            thumbnail: "https://lh3.googleusercontent.com/ntXNiMisZc-BoY9E86ds94g_Zu6NxEncb21-CdZ_TLmaa6VTHDaWqKcpaBd8__AdPY6otlgf90wMOV45BLJCwgxLXP2Fr8S8GaLmebmCtb9Rf48iioWLCDhY0TSuUX9aj-h58QSYcEb7-O67FYz7bBvHKgr1woL1wouVTlRtVJ-BodC8to0krrH49kUW3a9VEN014pKctyWFP33ymQNkwknHx8zZ-ff_vT0p27cxXOeVf93m5paQhLz8RFFNulvuzSl6PaHh4irC6OGDGXwpV25nX0EZGg4DXJXXkR6PDkx0tzcIqCJon4q6XDu-ogn_3rxu1GWpUMwSpiDiZto_3_BHpgSWK__9TcwpBlcn8aEiq6i7HCBxdt2v1pdHg-XBJ_P0TwS_oqLKQ2G-owmRN92_bg707txuAndu5OjmtFnjYo6PZccmQz3qEDsKSXsBc9OAUI3Yf6GAsq0_Bu5981iUw5Vl_pv-nh-3I_T04lF7Y3-pipG3AF7mzdlFHYOE6MImx7A_K-6lyIqPWMyORw6moneWm9qU4PPJ-yL24n6N4SwtzJNhuVYLc_k6RYL3suj_4f_ZjZYLd1MXkUbKeS422ojMjinwyeYuhFYvKI33Ox3pJUGUYY5F5uh0CbwuP-gbExA-b1WeDvmbv32XuPze9jR0Q5nIfhBWi-n2yJlN6XnD50vbGlUuzTdfu1TZXMaNziESd86NicU8_Lvt2n1BX8E3E7QOLBNG8vcSEwgxuWSMZtfr9js=w890-h1334-no"
            },
            {
            id: 7,
            name: "Markenson Jean",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            thumbnail: "https://lh3.googleusercontent.com/neX_l98r1FcuuTvZNF7ag25O4h44gW9-_yTuWHFbhWGUrAVAe-J2Ux5GB8dCWnmV6LMqeZUL2eYs6WAYFqtd0rLMM4q3PP_gyNTffnt9JWfp-VVjiSEYodxYp9S2f4MRNEgt4NOYplCibCO8FK6QP_Bjqy1oluDkCdg873N2LqdI2PjKEpx9ybrcFbvu26Y8OMBWEwvBGm642W8GdwT5bZkSDbTW52ViRNzUDCi3hLT-iRqsPNNnCKMowQJbDK3LQmIA086UwP3IYK0415qGlRzPvTolCqWXyHqqVbRW8zZo4aBICMHagvLTbO5PaaI3UUh34b2C9kr37Nov-NgRhULBI0-euSjKmRMVvhxDJ04hfWrKhZxPX1-ds1ZdtEYIqo7Q5NcxHIYlrwfhCo8ByGdv0BRArD5wYGRCwl0X5LCSHFdj_rIXPYOw2-xb3PuveC_u2oBfqMA-wSDfKnlsxOxUtVKruu8hXIvH2wnGti3OAbtDtg9K9JL5iU6CG-IPSv10dDzyC0HzBLN-1gH7fFm3YRBKWUeSrGF5iy1Fdxz27Rfsltk9CfApnqBsgsHWDKFU5AtKtPNkwO_pl0b994-LfSOcr_Nx7G1ZYmAVlrkzIQtFKrgHKcV8RqD4QIv1NAhglKgYZmtkLF2puADEbE0MG2UVqlzdtpMI9qb-wzn55RSSBTQ_rCC9qfcLUP_4dAucP582CR78mSxZ6a5PhPgaZVFl1VFAqufeEcN_YOADYvoI83mJCaU=w1080-h607-no",
            flipped: true
            },
            {
            id:8,
            name: "Alexandre Family",
            thumbnail: "https://lh3.googleusercontent.com/ikqAj0VUYhPjDEOzAGfZ6r71QFgoWxOLcG0qeF39O0EZa89LwjCpLtx5lKHVWWCqKMXR95RToeYWidZDTAhfG2wwTVrMwwSOIL7IUfrAD8zVkto587BpVHbmJRUgEvgJpLGf8zBtghzsvS8QKJQ7oOct8kTWmbd6WeahFGStPDrnlq7x_ybbCLMAwoFdDkRxbtp-1MYNbqhTBoLti_oRK7y_duFLeeZFn3xBFcKH7AQ93E71qWCoBJjadp-sm7fBh88oUSRXBnVSyO5EnsZxbvo2BclWXjHNBMHkVSn5yoSifgBj0W2zJq3ELR3evQ8veEPJLuK599VAQWnftAvI9OtVQ4rCaPoG95ko6jeJVSlDmRAvqklFzk0sniJEylWFjh5_Nv_mxxcXSSds_vGIGvaKe1MZSshONek9kPGQojrkWrHrB51Tvq7ReOntRWrp993vpJbUeDk82KJWQAQO5UHk1N_FioDxSH93fjh98swPyPRYX_M4uxVgAxUhGnEYcAY0W9e4Tj7QRhzBxCqj5JQh_Daq0xiOREO0YaZTdIVqMBL_prk35hgGA-hmu6zQ2XjM0dshOwcYD0qImvCGwO9NcHUYKdaGWWl63FHtceenBHNT3FYz5VzZGAONeDpRMy-hOexuqaiC0FV5PCDOMfxlucb6A9qYWmiit3RvGIUkTWCcoxs4Y8O4BaTIeIVPoCsgT68HRYAItIbGWdmy_29ZOLERyEqk01yuNDG4OhlgACR0fA2CWbQ=w501-h334-no"
            },
            {
            id:9,
            name: "Christiana Alexandre",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            thumbnail: "https://lh3.googleusercontent.com/SRFv3mwAHKNs4mh2bEePXiemvSRA7OG27E-X1lUnzMXQghRm5suSEnLN8nf5ubZuglD7JvcIL58ZbUxMXwkoEag55VYcfXHJJRbe-KF3O_WKIQfavDZFlV-XsTYz9w-RJGtbLCtG5fiSFatpRQgnCHBNIpM9V-tu04t6hYISND9bIBF2dX1qRD1F21TFqFZw7hRtX45qk9Jaqs8hZp4F9v281s7XNwk_0wYoEMYENct04ZB_UGjaRbU1nAjTRJnEiHWJhx885GpKvTGVyHJpHAj_Ro07DksuqbPnxjAW1ChceZwZCUqrNZ0tn5YQzjtpp8FaLUEq6nSu3OicOmxUGmTNuUZNkqWQ5QQkfifH3biWKlAsibPW1Vzymy3OO3f2BFQaUeswRXnHj5m-x91sd9KXjPOZwROih9XgLzoGvN_cNpgo-QIaiMvctkhbMofJYk1sXiqeBrtIuslayuCu2nDjW0aM_b08Yi9PxdglGtfGdh2kGmdpJ2DVXL9IriFFQGXKJw_ALaeBnHeZsZ9YS4VTWwkAqBqDkBkJ_d82w9Jua7jLJQfoqxvUHEDbWC5-LeNf_OJZg_7V5LN9JfjK0R5NgWfmNeYf7flXPBMCvjSrryx44geoXunWXlUIc2E-bCaVRQGUH5KPm2Wf168fvVI3hOG6V3IFUF_yeLQYAiK3iwWeH42YPWSw5MSPkj7ZGMA6TVwpX6zQZE-gSjDTHSk6WqGJqe-J5UNsYVojn0AOFsJ4GhOIJ00=w566-h377-no"
            },
             {
            id:10,
            name: "Darkenlove Alexandre",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            thumbnail: "https://lh3.googleusercontent.com/1gzRavEdmdsfVWU_kdgY0br7Es2_KpaIMu0pDz2V2LRBQvY_vID8KPRuIZtZP0FockrkoTqmpoPrbXFK578vwhW044cTW70HiXmdxjh0InoUhptWHTmeenH_wJK3w3Zg_bzGl5-BIeodInRFPAm0jKc19KsLJIxlB93AiouFLdBghdUkQ3R7QlDRgndKC0NhOmVxJOJ_kXVRnp5OBFrDFxIGd4lFpgAFUuy-wUymYvbuw0rWi1RO7_LOfBRJyRGkGqGsBVth-jwnxOT1NeIiCUdZ8f2iK-C0lXBtsaDiNwOOj8OKASA3p4R2JmwOJh4ElsfZo2GUPoLovtDAhA-Ys2hsFqOuaM4RiK-u2sVpeiygurDPaDauvIEhpFTTOgzFmSxcG1sYKBdRDI3cQn3nhQxO7tmkTKSOHJY4k4g2x2xiLlingigckPKj3m8BmJX93Rfoar98JVngJwS_skvNVSyaoCqqClcSnxV-DpWBpKaT_Yja84hVLfEgQULh9FpkOMCnpu9WziirZXXniGQ4vcIeOtmJAsZ9AlzqJZPLjsa6LezJO3VKeE6_3bQ0rHSfiyPgwAo1OiOWYgom7bic6IXwb3bubH2cwPlX6YAoVwq9K7KRCC3MnYDIxTylZV83yExQT9-KU24wU6UAiiYEDpDJ5ATAg1QMQIIfBlpBzDeQ70kTtZfFRkcG1hfx13KYsR6khoVr1wUoc3euPOTtrdC9fUHjAGoULE-lO_6nZ0RxNpPMpWTG2uc=w890-h1334-no",
            flipped: true
            },
             {
            id:11,
            name: "Wideline Alexandre",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            thumbnail: "https://lh3.googleusercontent.com/1JPSkr63DKPcOSwqPAeOezLZnk_2CoUPop4HSzF1TEbHFrXqvVAG4jF9zShKoUrxd0SvaZtAZyZZuXsEGq1CTbYn3S6CXTJkER9gw4ImZ05mrMEg6OXS2Ehhl7XGpHJvzJ16aivsO7VqmypdJ3-QNx9vp28_X2gj09tEJSXGKejsnxNIei0OLzumfpVplubJqpejkRKMOmA3z_gErM30bGOe2CtbWtUvtoE2lJIDXYA5P1GrXMby97kLnG9QsisKBgVZ7gFQuDAgiU9VaJPactrd5yyjeqYyvBnMMnF9-Z1UkH866bHWclhn9xgRmB7D7U5h4br1MDEbr0LOwcRr-HTR4monruRRh4HoKz6wL7Fk492_qPSKpJ9wRPIrP9DatqIk7zdBSiXyHxQpSB6Kgqn2jW-V8T31n1ggQO3Q-p6S74DByhZccuSGNpMGL-Fj9KgUKA4PgO2GxHq8zELDdCy5V-3u0SO1msDyQCttOzh0aY5mmWVrPaCY8UklEcIiTRUQSidKil8TiUzVg3Cpvv3hVWtiqNPRYD3lsI3GFf9JqKE1UarRIW6f8TJrDgdjGhiAocDp8i7pc5AVl3AmPveQ7N6XLbbjytr04kOpjapvUjV8H93sBoVDVzths8IoS8QIb7gRYt4g93qnIX1PRptgPKCmwQx15sdT-Jnh_3uzVDl2wvewwbdLS9eOLxDhDbEA1hWVIIZOJW-OZ7jByym6KLusinORNaIo7jYGjvl2gR7IIRTGMPk=w890-h1334-no"
            },
          ]
      }
  },
}
</script>

<style lang="scss">
   .meet-bird-container{
       padding: 0%;
       display: flex;
   }

   .meet-bird-grid{
       width: 100%;
       display: flex;
       flex-flow: column;
       align-content: center;
   }
</style>