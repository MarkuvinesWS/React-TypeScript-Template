import React from 'react';
import '../../style.css'
import im from '../../assets/images/image.jpg'


const FirstComponent = () => {
    return (
        <div className='main'>
            <h1>Hey ReactTypeScript! {process.env.NODE_ENV}</h1>
            <img src={im} alt="image" width={'1000px'}/>
            <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti enim excepturi, laborum magnam odit quasi! Aliquid deleniti ex explicabo ipsum iusto laboriosam nemo nisi, numquam obcaecati reprehenderit veniam vero? Ad aliquam deleniti expedita, maxime obcaecati tenetur. Aspernatur cum dolor et iure modi molestiae mollitia, nihil obcaecati omnis repudiandae sed ut. Amet cum in, incidunt ipsam officia quam sequi ullam? Accusamus delectus est facilis ipsam nesciunt nobis sint tempora totam! Alias aliquam amet cum delectus expedita fugit in inventore iste magnam nemo quasi quo quod reprehenderit sed, ullam ut, veniam! Architecto asperiores consequuntur debitis dignissimos dolore dolores ducimus eius esse explicabo hic provident quae quas quibusdam quis quisquam quo ratione rem, repellendus, suscipit veritatis. Accusamus animi enim perferendis quos vel! Dolores eaque inventore ipsam nulla quo similique velit! Adipisci aperiam consequatur illum in ipsam iusto libero nisi nobis ratione? Adipisci at beatae commodi consequatur dolore facilis laboriosam omnis quis sit?</p>
        </div>
    );
};

export default FirstComponent;