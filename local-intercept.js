const { Targetables } = require("@magento/pwa-buildpack")

module.exports = targets => {
    const targetables = Targetables.using(targets)

// FOOTER

    const Footer = targetables.reactComponent("@magento/venia-ui/lib/components/Footer/footer.js")

    const CustomFooter = Footer.addImport(
      `CustomFooter from ${JSON.stringify(
            require.resolve('./src/components/CustomFooter/customFooter')
        )}`
    );

    Footer.replaceJSX(
        '<footer data-cy="Footer-root" className={classes.root}>',
        `<${CustomFooter} />`
    );

//HEADER    

 const Header = targetables.reactComponent(
        '@magento/venia-ui/lib/components/Header/header.js'
    );

    const CustomHeader = Header.addImport(
         `CustomHeader from ${JSON.stringify(
            require.resolve('./src/components/CustomHeader/customHeader')
        )}`
    );

    Header.replaceJSX(
        '<Fragment>',
        `<${CustomHeader} />`
    );

//PDP

const ProductFullDetail = targetables.reactComponent(
    "@magento/venia-ui/lib/components/ProductFullDetail/productFullDetail.js"
);

const CustomProductFullDetail = ProductFullDetail.addImport(
    `CustomProductFullDetail from ${JSON.stringify(
        require.resolve('./src/components/CustomProductFullDetail/customProductFullDetail')
    )}`
);

ProductFullDetail.replaceJSX(
    '<Fragment>',
    `<${CustomProductFullDetail} product={product} productDetails={productDetails} mediaGalleryEntries={mediaGalleryEntries} options={options} cartActionContent={cartActionContent} customAttributesDetails={customAttributesDetails} breadcrumbs={breadcrumbs} />`
);

}