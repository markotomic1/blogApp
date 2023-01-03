import React from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";
const Single = () => {
  return (
    <div className='single'>
      <div className='content'>
        <img src='' alt='' />
        <div className='user'>
          <img src='' alt='' />
          <div className='info'>
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className='edit'>
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt='' />
            </Link>
            <img src={Delete} alt='' />
          </div>
        </div>
        <h1>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda,
          aut.
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea possimus
          impedit est exercitationem consequatur iusto natus deserunt? Delectus
          id quod nisi sit pariatur, quasi suscipit maxime natus quam placeat
          quos dolorem deserunt vel iure rerum voluptas ipsum aperiam debitis
          earum voluptate repellat cumque necessitatibus velit! Esse beatae illo
          aspernatur nemo rem dolorem nulla eum animi magni eius unde quidem
          vitae deserunt, quia assumenda corporis? Blanditiis unde distinctio
          vel corporis numquam reiciendis. Officia molestias voluptatem
          accusamus veritatis quae blanditiis est debitis sit, ex quaerat, dolor
          adipisci laborum provident. Laudantium voluptate sapiente perferendis
          autem aliquid pariatur non rerum tempora, quos odit quidem
          perspiciatis iste facere ullam qui modi. Minima odio dolor magni, modi
          quidem praesentium quibusdam nisi a odit sunt est? Tempora repudiandae
          officia recusandae quo dolores. Amet provident facere ratione quod
          laborum ipsam quidem placeat eaque ut! Non tempore blanditiis labore
          inventore, qui ex, harum facilis hic reprehenderit quis molestias ad
          unde rem esse nemo sint adipisci error tempora, eius odio voluptatibus
          autem culpa voluptatum et! Sequi, quas? Nihil libero labore officia
          accusantium doloribus commodi ipsum maiores inventore sapiente tempore
          eos quos accusamus quibusdam aliquid velit rerum officiis, itaque
          illum quae facilis cumque soluta quaerat? Dignissimos sit ullam sequi
          beatae numquam inventore ea officiis illo magni totam nulla vero,
          natus quam quidem architecto dolore odio asperiores sapiente id
          repellendus harum? Quae et debitis fugiat eum at quam nobis error,
          eius tempore natus voluptatum est nesciunt impedit amet hic
          reprehenderit explicabo dolores repellendus facere nemo! Esse rem
          optio a quaerat sapiente, sequi reprehenderit aliquam voluptates
          maxime quibusdam, ab ipsum laborum nesciunt tenetur? Veniam mollitia
          officiis praesentium sint minima vel repellat recusandae nostrum culpa
          adipisci sequi nulla, nam natus, explicabo, exercitationem dolorum
          incidunt! Eius sapiente totam delectus veritatis aspernatur facere
          illo quam cumque cupiditate rem consequuntur optio fuga minus, nulla
          error ab aliquid inventore possimus? Aliquid modi consequuntur iure
          quod cumque. Sapiente aspernatur ut quis iure vitae numquam assumenda
          consequuntur, excepturi architecto voluptate. Odit nam maxime autem
          earum tempora, amet doloremque quae, ullam at itaque ea consectetur
          provident quia incidunt totam magni ab delectus nihil vel rerum.
          Doloremque, necessitatibus impedit suscipit laborum obcaecati sunt ex
          reprehenderit dolorem! Ullam, facere. Ipsum aliquid dolorem modi unde
          voluptate aperiam porro consequatur voluptatum quaerat quos! Error
          incidunt voluptas, aperiam optio quis nam vero porro, beatae nobis
          animi debitis eum quas doloribus repudiandae fugiat est. Voluptatem
          error fugiat, labore harum vitae consequatur vero expedita magni eum
          culpa ipsa, est quis itaque incidunt assumenda iure ea laborum quod
          facere? Ut atque deleniti consequuntur at aliquam excepturi odit
          dolore saepe, velit distinctio provident cumque exercitationem
          similique dolorem earum ipsam iusto blanditiis mollitia necessitatibus
          sed nemo? Vero illo minima voluptatum. Quaerat reprehenderit deleniti
          eveniet blanditiis sint aut iste, porro unde voluptas distinctio ut
          itaque excepturi reiciendis maxime eos aliquid quasi veritatis libero
          dolor labore hic qui, officiis ab. Culpa quam doloribus ducimus
          veritatis rem non consectetur fuga minima adipisci sint nostrum omnis,
          quo vero officia similique harum sequi alias doloremque aliquam ipsum
          expedita est id! Impedit rem nam dignissimos facilis consequatur?
        </p>
      </div>
      <div className='menu'>
        <Menu />
      </div>
    </div>
  );
};

export default Single;
