import React from 'react'
import styled from 'styled-components'

function HomeBanner() {
    return (
        <HomeDownloadBanner>
            <DownloadBannerImg>
                <img src="/Image/category/Banner/DreamBanner.jpg" width="85%" />
            </DownloadBannerImg>
        </HomeDownloadBanner>
    )
}

export default HomeBanner

const HomeDownloadBanner = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    width: 117%;
`
const DownloadBannerImg = styled.div`
    height: auto;
    margin: 12px;
    display: flex;
    flex-wrap: wrap;
`