<script>

</script>

<svelte:options tag={'dpdhl-theme-desktop'} />

<slot />


<style>
    :root,
    :host {
        --unit:             16px;
        --border-radius:    4px;
        
        --font-size:            16px;
        --font-regular:         "DeliveryRegular";
        --font-italic:          "DeliveryItalic"; 
        --font-bold:            "DeliveryBold";
        --font-bold-italic:     "DeliveryBoldItalic";
        --font-black-condensed: "DeliveryBlackCondensed";
        --font-light:           "DeliveryLight";
        --font-light-condensed: "DeliveryLightCondensed";
        --font-light-italic:    "DeliveryLightItalic";

        --color-black:      rgba(0,0,0,0.9);
        --color-white:      #ffffff;
        --color-postyellow: #FFCC00;
        --color-gray80:     #333333;
        --color-gray67:     #555555;
        --color-gray60:     #666666;
        --color-gray50:     #808080;
        --color-gray45:     #8c8c8c;
        --color-gray30:     #b2b2b2;
        --color-gray20:     #cccccc;
        --color-gray10:     #e5e5e5;
        --color-gray08:     #ebebeb;
        --color-gray05:     #f2f2f2;
        
        --color-dhlred:        #D40511;
        --color-dhlred-light:  #FEE7E8;
        --color-dhlred-bright: #F4C0C3;

        --color-green-bright:   #76BD22;
        --color-green-bright-rgb: 118, 189, 34;
        --color-green-light:    #E5F2EB;
        --color-green-dark:     #007c39;

        --color-steel-gray-medium: #E5E8E9;
        --color-steel-gray-light:  #F5F7F8;

        --color-blue:        #0099FF;
        --color-blue-bright: #A6DBFF;

        --color-yellow-bright: #F7E59E;
        --color-yellow-dark:   #D2A800;

        --color-orange-bright: #F3D5B5;
        --color-orange:        #FE8A00;
        
        --color-primary:   var(--color-postyellow);
        --color-secondary: var(--color-white);

        --shadow: 0px 3px 8px -1px rgba(0, 0, 0, 0.1), 0px 10px 24px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.1);

        font-family: var(--font-regular);
        font-size:   var(--font-size);
    }

  

</style>


<svelte:head>
    <style>
        
    @font-face {
        font-family: "DeliveryRegular";
        src: url("../fonts/delivery/Delivery_W_Rg.woff2") format("woff2");
        font-display: swap;
    }

    @font-face {
        font-family: "DeliveryBold";
        src: url("../fonts/delivery/Delivery_W_Bd.woff2") format("woff2");
        font-display: swap;
    }

    @font-face {
        font-family: "DeliveryBoldItalic";
        src: url("../fonts/delivery/Delivery_W_BdIt.woff2") format("woff2");
        font-display: swap;
    }

    @font-face {
        font-family: "DeliveryBlackCondensed";
        src: url("../fonts/delivery/Delivery_W_CdBlk.woff2") format("woff2");
        font-display: swap;
    }

    @font-face {
        font-family: 'DeliveryLightCondensed';
        src: url('../fonts/delivery/Delivery_W_CdLt.woff2') format("woff2");
        font-display: swap;
    }

    @font-face {
        font-family: "DeliveryItalic";
        src: url("../fonts/delivery/Delivery_W_It.woff2") format("woff2");
        font-display: swap;
    }

    @font-face {
        font-family: "DeliveryLight";
        src: url("../fonts/delivery/Delivery_W_Lt.woff2") format("woff2");
        font-display: swap;
    }

    @font-face {
        font-family: "DeliveryLightItalic";
        src: url("../fonts/delivery/Delivery_W_LtIt.woff2") format("woff2");
        font-display: swap;
    } 
    </style>
</svelte:head>
