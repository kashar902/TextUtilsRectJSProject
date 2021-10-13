export default function About(props) {

    // const [mystyle, setmyStyle] = useState({
    //   backgroundColor: 'white',
    //   color: 'black',
    //   border: '1px solid gray'
    // })

    // const toggleStyle =()=> {
    //   if (mystyle.backgroundColor === 'white') {
    //     setmyStyle ({
    //       backgroundColor: 'black',
    //       color: 'white',
    //       border: '1px solid gray'
    //     })
    //   }
    //   else{
    //     setmyStyle({
    //       backgroundColor: 'white',
    //       color: 'black',
    //       border: '1px solid gray'
    //     })
    //   }
    // }

    return (
        <>
            {/* <div className="form-check form-switch container my-2 right "  >
        <input className="form-check-input" onClick={toggleStyle} type="checkbox" id="flexSwitchCheckDefault" />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
      </div> */}


            <div className="containter" >

                <h2 style={{ color: props.mode === 'light' ? '#000' : 'white', }}>About US</h2>

                <div className="accordion" id="accordionExample" >
                    {/* Accordian Box one */}
                    <div className="accordion-item" style={{ color: props.mode === 'light' ? '#000' : 'white' }}>
                        <h2 className="accordion-header" id="he00adingOne">
                            <button className="accordion-button" style={{ color: props.mode === 'light' ? '#000' : 'white', backgroundColor: props.mode === 'light' ? 'white' : '#000' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                What is TextUtils? 
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={{ color: props.mode === 'light' ? '#000' : 'white', backgroundColor: props.mode === 'light' ? 'white' : '#000' }}>
                                Doing BS-CS From NED-UIT  
                            </div>
                        </div>
                    </div>

                    {/* Accordian Box two */}
                    <div className="accordion-item" style={{ color: props.mode === 'light' ? '#000' : 'white', backgroundColor: props.mode === 'light' ? 'white' : '#000' }}>
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button" style={{ color: props.mode === 'light' ? '#000' : 'white', border: '2px solid white', backgroundColor: props.mode === 'light' ? 'white' : '#000' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Accordion Item #2
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={{ color: props.mode === 'light' ? '#000' : 'white', backgroundColor: props.mode === 'light' ? 'white' : '#000' }}>
                                Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Magnam Praesentium Optio Dolorem Necessitatibus Quibusdam, Consequatur Veniam Aliquid Fuga Quas Illo Dolores Placeat Eos Odio Ad Distinctio Commodi Laudantium Alias Inventore? Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Molestias Ea Omnis Suscipit Reiciendis Laudantium Aliquam Corporis Aliquid Ex Dignissimos Obcaecati Similique Molestiae, Deleniti, Mollitia Repellat? Aliquid Earum Quam Rerum Ex. Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Eveniet Dolores Consectetur Unde Quidem, Harum Laudantium Itaque Qui. Sint, Odio Vero. Ducimus Sed In Eum Exercitationem Iure. Natus Dicta Cum Laborum!lorem Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Magnam Praesentium Optio Dolorem Necessitatibus Quibusdam, Consequatur Veniam Aliquid Fuga Quas Illo Dolores Placeat Eos Odio Ad Distinctio Commodi Laudantium Alias Inventore? Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Molestias Ea Omnis Suscipit Reiciendis Laudantium Aliquam Corporis Aliquid Ex Dignissimos Obcaecati Similique Molestiae, Deleniti, Mollitia Repellat? Aliquid Earum Quam Rerum Ex. Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Eveniet Dolores Consectetur Unde Quidem, Harum Laudantium Itaque Qui. Sint, Odio Vero. Ducimus Sed In Eum Exercitationem Iure. Natus Dicta Cum Laborum!lorem            </div>
                        </div>
                    </div>


                    {/* Accordian Box one */}
                    <div className="accordion-item" style={{ color: props.mode === 'light' ? '#000' : 'white', backgroundColor: props.mode === 'light' ? 'white' : '#000' }}>
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" style={{ color: props.mode === 'light' ? '#000' : 'white', border: '2px solid white', backgroundColor: props.mode === 'light' ? 'white' : '#000' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Accordion Item #3
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={{ color: props.mode === 'light' ? '#000' : 'white', backgroundColor: props.mode === 'light' ? 'white' : '#000' }}>
                                LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT. MAGNAM PRAESENTIUM OPTIO DOLOREM NECESSITATIBUS QUIBUSDAM, CONSEQUATUR VENIAM ALIQUID FUGA QUAS ILLO DOLORES PLACEAT EOS ODIO AD DISTINCTIO COMMODI LAUDANTIUM ALIAS INVENTORE? LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT. MOLESTIAS EA OMNIS SUSCIPIT REICIENDIS LAUDANTIUM ALIQUAM CORPORIS ALIQUID EX DIGNISSIMOS OBCAECATI SIMILIQUE MOLESTIAE, DELENITI, MOLLITIA REPELLAT? ALIQUID EARUM QUAM RERUM EX. LOREM IPSUM DOLOR SIT AMET CONSECTETUR, ADIPISICING ELIT. EVENIET DOLORES CONSECTETUR UNDE QUIDEM, HARUM LAUDANTIUM ITAQUE QUI. SINT, ODIO VERO. DUCIMUS SED IN EUM EXERCITATIONEM IURE. NATUS DICTA CUM LABORUM!LOREM LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT. MAGNAM PRAESENTIUM OPTIO DOLOREM NECESSITATIBUS QUIBUSDAM, CONSEQUATUR VENIAM ALIQUID FUGA QUAS ILLO DOLORES PLACEAT EOS ODIO AD DISTINCTIO COMMODI LAUDANTIUM ALIAS INVENTORE? LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT. MOLESTIAS EA OMNIS SUSCIPIT REICIENDIS LAUDANTIUM ALIQUAM CORPORIS ALIQUID EX DIGNISSIMOS OBCAECATI SIMILIQUE MOLESTIAE, DELENITI, MOLLITIA REPELLAT? ALIQUID EARUM QUAM RERUM EX. LOREM IPSUM DOLOR SIT AMET CONSECTETUR, ADIPISICING ELIT. EVENIET DOLORES CONSECTETUR UNDE QUIDEM, HARUM LAUDANTIUM ITAQUE QUI. SINT, ODIO VERO. DUCIMUS SED IN EUM EXERCITATIONEM IURE. NATUS DICTA CUM LABORUM!LOREM            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}