import React from 'react'
import SilverCollectionBanner from '../components/SilverCollectionBanner'
import SilverContentSection from '../components/SilverContent'
import SilverProductsShowcase from '../components/SilverProductShowcase'
import FeaturesSection from '../components/Features'

const SilverPage = () => {
  return (
    <div>
        <SilverCollectionBanner/>
        <SilverContentSection/>
        <SilverProductsShowcase/>
        <FeaturesSection/>
    </div>
  )
}

export default SilverPage