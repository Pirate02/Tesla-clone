import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section
                title='Model S'
                description='Order online for Touch on delivery'
                backgroundImg='https://i2.res.24o.it/images2010/Editrice/ILSOLE24ORE/ILSOLE24ORE/Online/Immagini/ArticleGallery/Motori/2023/02/Ritagli/Foto%201%20Tesla%20Model%20Y-kuQC--1020x533@IlSole24Ore-Web.jpeg'
                leftBtnText='Custom Order'
                rightBtnText='Existing Inventory'
            />
            <Section
                title='Model 3'
                description='Order online for Touch on delivery'
                backgroundImg='https://ev-database.org/img/auto/Tesla_Model_3_2021/Tesla_Model_3_2021-01@2x.jpg'
                leftBtnText='Custom Order'
                rightBtnText='Existing Inventory'
            />
            <Section
                title='Model Y'
                description='Order online for Touch on delivery'
                backgroundImg='https://www.topgear.com/sites/default/files/2022/03/TopGear%20-%20Tesla%20Model%20Y%20-%20003.jpg'
                leftBtnText='Custom Order'
                rightBtnText='Existing Inventory'
            />
            <Section
                title='Lowest Cost Solar Panels'
                description='Money-back gurantee'
                backgroundImg='https://techcrunch.com/wp-content/uploads/2019/10/SR-Hero_2880x1800.jpg'
                leftBtnText='Order Now'
                rightBtnText='Learn More'
            />
            <Section
                title='Accessproes'
                description=''
                backgroundImg='https://cdn.shopify.com/s/files/1/0641/8861/2851/products/SolarEnergy-01.jpg?v=1675328713'
                leftBtnText='Shop now'
            />



        </Container>
    )
}

export default Home

const Container = styled.div`
    height : 100vh;
`
