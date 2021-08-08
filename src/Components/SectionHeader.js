import React from 'react'
import styled from 'styled-components'

function SectionHeader() {
    return (
        <SctnHeader>
            <SctnLine>
            </SctnLine>
            <span>TOP CATEGORIES</span>
            <SctnLine>
            </SctnLine>
        </SctnHeader>
    )
}

export default SectionHeader

const SctnHeader = styled.div`
    width: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Forte,'Roboto', sans-serif;
    font-weight: 700;
    font-size: 36px;
    line-height: 54px;
    letter-spacing: 0.7px;
    color: #202024;
    text-align: center;
`

const SctnLine = styled.div`
    width: 30%;
    margin: 10px;
    height: 2px;
    background: pink;
`