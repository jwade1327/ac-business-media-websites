module.exports = ({
  omedaConfig,
  idxConfig,
  rapidIdentProductId,
  websiteBehaviorAttributeId,
  // Passed through, if specified.
  appendPromoCodeToHook = [
    { hook: 'onLoginLinkSent', promoCode: 'Parameter1' },
    { hook: 'onAuthenticationSuccess', promoCode: 'P1Verified' },
    { hook: 'onUserProfileUpdate', promoCode: 'P1FullProfile' },
  ],
  appendBehaviorToHook = [],
  appendDemographicToHook = [],
}) => ({
  clientKey: omedaConfig.clientKey,
  brandKey: omedaConfig.brandKey,
  appId: omedaConfig.appId,
  inputId: omedaConfig.inputId,
  rapidIdentProductId,
  idxConfig,

  /**
   * Behavior config is now mandatory and can be generated by the CLI.
   * @see https://github.com/parameter1/identity-x-omeda-cli
   *  */
  behaviors: {
    logIn: 6270,
    verifyEmail: 6269,
    submitProfile: 6271,
  },
  behaviorAttributes: {
    website: {
      id: 127,
      valueId: websiteBehaviorAttributeId,
    },
    actionSource: {
      id: 125,
      valueIds: {
        default: 451143,
        newsletterSignup: 451144,
        comments: 451145,
        contentGate: 451142,
      },
    },
    newsletterSignupType: {
      id: 126,
      valueIds: {
        default: 451148,
        pushdown: 451147,
        inlineContent: 451150,
        inlineSection: 451149,
        footer: 451146,
      },
    },
    contentGateType: {
      id: 128,
      valueIds: {
        default: 451151,
        metered: 451152,
        printPreview: 451153,
      },
    },
  },
  appendPromoCodeToHook,
  appendBehaviorToHook,
  appendDemographicToHook,
});