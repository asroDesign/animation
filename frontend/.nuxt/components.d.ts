
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)
interface _GlobalComponents {
      'LiveChat': typeof import("../components/LiveChat.vue")['default']
    'Portfolio': typeof import("../components/Portfolio.vue")['default']
    'RequestQuote': typeof import("../components/RequestQuote.vue")['default']
    'StarRating': typeof import("../components/StarRating.vue")['default']
    'Footer': typeof import("../components/footer.vue")['default']
    'Header': typeof import("../components/header.vue")['default']
    'MainAnimationToolkit': typeof import("../components/main/AnimationToolkit.vue")['default']
    'MainCreativity': typeof import("../components/main/Creativity.vue")['default']
    'MainProcessStep': typeof import("../components/main/ProcessStep.vue")['default']
    'MainServicesStepDesign': typeof import("../components/main/ServicesStepDesign.vue")['default']
    'ToolsBlogSidebar': typeof import("../components/tools/BlogSidebar.vue")['default']
    'ToolsContactForm': typeof import("../components/tools/ContactForm.vue")['default']
    'ToolsD2AnimationPlayer': typeof import("../components/tools/D2AnimationPlayer.vue")['default']
    'ToolsD3AnimationPlayer': typeof import("../components/tools/D3AnimationPlayer.vue")['default']
    'ToolsDepositModal': typeof import("../components/tools/DepositModal.vue")['default']
    'ToolsFaqSection': typeof import("../components/tools/FaqSection.vue")['default']
    'ToolsInput': typeof import("../components/tools/Input.vue")['default']
    'ToolsInputLabel': typeof import("../components/tools/InputLabel.vue")['default']
    'ToolsPrimaryButton': typeof import("../components/tools/PrimaryButton.vue")['default']
    'ToolsProcessTimeline': typeof import("../components/tools/ProcessTimeline.vue")['default']
    'ToolsSecondaryButton': typeof import("../components/tools/SecondaryButton.vue")['default']
    'ToolsTestimonials': typeof import("../components/tools/Testimonials.vue")['default']
    'ToolsToast': typeof import("../components/tools/Toast.vue")['default']
    'ToolsVideoPlayer': typeof import("../components/tools/VideoPlayer.vue")['default']
    'ToolsWithdrawModal': typeof import("../components/tools/WithdrawModal.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
    'NuxtPicture': typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
    'NuxtIcon': typeof import("../node_modules/nuxt-icons/dist/runtime/components/nuxt-icon.vue")['default']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
      'LazyLiveChat': LazyComponent<typeof import("../components/LiveChat.vue")['default']>
    'LazyPortfolio': LazyComponent<typeof import("../components/Portfolio.vue")['default']>
    'LazyRequestQuote': LazyComponent<typeof import("../components/RequestQuote.vue")['default']>
    'LazyStarRating': LazyComponent<typeof import("../components/StarRating.vue")['default']>
    'LazyFooter': LazyComponent<typeof import("../components/footer.vue")['default']>
    'LazyHeader': LazyComponent<typeof import("../components/header.vue")['default']>
    'LazyMainAnimationToolkit': LazyComponent<typeof import("../components/main/AnimationToolkit.vue")['default']>
    'LazyMainCreativity': LazyComponent<typeof import("../components/main/Creativity.vue")['default']>
    'LazyMainProcessStep': LazyComponent<typeof import("../components/main/ProcessStep.vue")['default']>
    'LazyMainServicesStepDesign': LazyComponent<typeof import("../components/main/ServicesStepDesign.vue")['default']>
    'LazyToolsBlogSidebar': LazyComponent<typeof import("../components/tools/BlogSidebar.vue")['default']>
    'LazyToolsContactForm': LazyComponent<typeof import("../components/tools/ContactForm.vue")['default']>
    'LazyToolsD2AnimationPlayer': LazyComponent<typeof import("../components/tools/D2AnimationPlayer.vue")['default']>
    'LazyToolsD3AnimationPlayer': LazyComponent<typeof import("../components/tools/D3AnimationPlayer.vue")['default']>
    'LazyToolsDepositModal': LazyComponent<typeof import("../components/tools/DepositModal.vue")['default']>
    'LazyToolsFaqSection': LazyComponent<typeof import("../components/tools/FaqSection.vue")['default']>
    'LazyToolsInput': LazyComponent<typeof import("../components/tools/Input.vue")['default']>
    'LazyToolsInputLabel': LazyComponent<typeof import("../components/tools/InputLabel.vue")['default']>
    'LazyToolsPrimaryButton': LazyComponent<typeof import("../components/tools/PrimaryButton.vue")['default']>
    'LazyToolsProcessTimeline': LazyComponent<typeof import("../components/tools/ProcessTimeline.vue")['default']>
    'LazyToolsSecondaryButton': LazyComponent<typeof import("../components/tools/SecondaryButton.vue")['default']>
    'LazyToolsTestimonials': LazyComponent<typeof import("../components/tools/Testimonials.vue")['default']>
    'LazyToolsToast': LazyComponent<typeof import("../components/tools/Toast.vue")['default']>
    'LazyToolsVideoPlayer': LazyComponent<typeof import("../components/tools/VideoPlayer.vue")['default']>
    'LazyToolsWithdrawModal': LazyComponent<typeof import("../components/tools/WithdrawModal.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']>
    'LazyNuxtPicture': LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']>
    'LazyNuxtIcon': LazyComponent<typeof import("../node_modules/nuxt-icons/dist/runtime/components/nuxt-icon.vue")['default']>
    'LazyNuxtPage': LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const LiveChat: typeof import("../components/LiveChat.vue")['default']
export const Portfolio: typeof import("../components/Portfolio.vue")['default']
export const RequestQuote: typeof import("../components/RequestQuote.vue")['default']
export const StarRating: typeof import("../components/StarRating.vue")['default']
export const Footer: typeof import("../components/footer.vue")['default']
export const Header: typeof import("../components/header.vue")['default']
export const MainAnimationToolkit: typeof import("../components/main/AnimationToolkit.vue")['default']
export const MainCreativity: typeof import("../components/main/Creativity.vue")['default']
export const MainProcessStep: typeof import("../components/main/ProcessStep.vue")['default']
export const MainServicesStepDesign: typeof import("../components/main/ServicesStepDesign.vue")['default']
export const ToolsBlogSidebar: typeof import("../components/tools/BlogSidebar.vue")['default']
export const ToolsContactForm: typeof import("../components/tools/ContactForm.vue")['default']
export const ToolsD2AnimationPlayer: typeof import("../components/tools/D2AnimationPlayer.vue")['default']
export const ToolsD3AnimationPlayer: typeof import("../components/tools/D3AnimationPlayer.vue")['default']
export const ToolsDepositModal: typeof import("../components/tools/DepositModal.vue")['default']
export const ToolsFaqSection: typeof import("../components/tools/FaqSection.vue")['default']
export const ToolsInput: typeof import("../components/tools/Input.vue")['default']
export const ToolsInputLabel: typeof import("../components/tools/InputLabel.vue")['default']
export const ToolsPrimaryButton: typeof import("../components/tools/PrimaryButton.vue")['default']
export const ToolsProcessTimeline: typeof import("../components/tools/ProcessTimeline.vue")['default']
export const ToolsSecondaryButton: typeof import("../components/tools/SecondaryButton.vue")['default']
export const ToolsTestimonials: typeof import("../components/tools/Testimonials.vue")['default']
export const ToolsToast: typeof import("../components/tools/Toast.vue")['default']
export const ToolsVideoPlayer: typeof import("../components/tools/VideoPlayer.vue")['default']
export const ToolsWithdrawModal: typeof import("../components/tools/WithdrawModal.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
export const NuxtPicture: typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
export const NuxtIcon: typeof import("../node_modules/nuxt-icons/dist/runtime/components/nuxt-icon.vue")['default']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyLiveChat: LazyComponent<typeof import("../components/LiveChat.vue")['default']>
export const LazyPortfolio: LazyComponent<typeof import("../components/Portfolio.vue")['default']>
export const LazyRequestQuote: LazyComponent<typeof import("../components/RequestQuote.vue")['default']>
export const LazyStarRating: LazyComponent<typeof import("../components/StarRating.vue")['default']>
export const LazyFooter: LazyComponent<typeof import("../components/footer.vue")['default']>
export const LazyHeader: LazyComponent<typeof import("../components/header.vue")['default']>
export const LazyMainAnimationToolkit: LazyComponent<typeof import("../components/main/AnimationToolkit.vue")['default']>
export const LazyMainCreativity: LazyComponent<typeof import("../components/main/Creativity.vue")['default']>
export const LazyMainProcessStep: LazyComponent<typeof import("../components/main/ProcessStep.vue")['default']>
export const LazyMainServicesStepDesign: LazyComponent<typeof import("../components/main/ServicesStepDesign.vue")['default']>
export const LazyToolsBlogSidebar: LazyComponent<typeof import("../components/tools/BlogSidebar.vue")['default']>
export const LazyToolsContactForm: LazyComponent<typeof import("../components/tools/ContactForm.vue")['default']>
export const LazyToolsD2AnimationPlayer: LazyComponent<typeof import("../components/tools/D2AnimationPlayer.vue")['default']>
export const LazyToolsD3AnimationPlayer: LazyComponent<typeof import("../components/tools/D3AnimationPlayer.vue")['default']>
export const LazyToolsDepositModal: LazyComponent<typeof import("../components/tools/DepositModal.vue")['default']>
export const LazyToolsFaqSection: LazyComponent<typeof import("../components/tools/FaqSection.vue")['default']>
export const LazyToolsInput: LazyComponent<typeof import("../components/tools/Input.vue")['default']>
export const LazyToolsInputLabel: LazyComponent<typeof import("../components/tools/InputLabel.vue")['default']>
export const LazyToolsPrimaryButton: LazyComponent<typeof import("../components/tools/PrimaryButton.vue")['default']>
export const LazyToolsProcessTimeline: LazyComponent<typeof import("../components/tools/ProcessTimeline.vue")['default']>
export const LazyToolsSecondaryButton: LazyComponent<typeof import("../components/tools/SecondaryButton.vue")['default']>
export const LazyToolsTestimonials: LazyComponent<typeof import("../components/tools/Testimonials.vue")['default']>
export const LazyToolsToast: LazyComponent<typeof import("../components/tools/Toast.vue")['default']>
export const LazyToolsVideoPlayer: LazyComponent<typeof import("../components/tools/VideoPlayer.vue")['default']>
export const LazyToolsWithdrawModal: LazyComponent<typeof import("../components/tools/WithdrawModal.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']>
export const LazyNuxtIcon: LazyComponent<typeof import("../node_modules/nuxt-icons/dist/runtime/components/nuxt-icon.vue")['default']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>

export const componentNames: string[]
