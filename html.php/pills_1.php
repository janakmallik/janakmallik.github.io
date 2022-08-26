<?php
echo '
<ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li class="nav-item" role="presentation">
    <button
      class="nav-link active"
      id="pills-home-tab"
      data-bs-toggle="pill"
      data-bs-target="#pills-home"
      type="button"
      role="tab"
      aria-controls="pills-home"
      aria-selected="true"
    >
      Education
    </button>
  </li>
  <li class="nav-item" role="presentation">
    <button
      class="nav-link"
      id="pills-profile-tab"
      data-bs-toggle="pill"
      data-bs-target="#pills-profile"
      type="button"
      role="tab"
      aria-controls="pills-profile"
      aria-selected="false"
    >
      Interests
    </button>
  </li>
  <li class="nav-item" role="presentation">
    <button
      class="nav-link"
      id="pills-contact-tab"
      data-bs-toggle="pill"
      data-bs-target="#pills-contact"
      type="button"
      role="tab"
      aria-controls="pills-contact"
      aria-selected="false"
    >
      Achievements
    </button>
  </li>
</ul>
<div class="tab-content" id="pills-tabContent">
  <div
    class="tab-pane fade show active"
    id="pills-home"
    role="tabpanel"
    aria-labelledby="pills-home-tab"
  >
    <dl>
      <dt>B.Sc. in CSE 2022*(on going)</dt>
      <dd>
        Ahsanullah University of Science and Technology, Dhaka. [3rd
        year 1st semester]
      </dd>
      <dt>HSC 2019</dt>
      <dd>Amrita Lal Dey College, Barisal.</dd>
      <dt>SSC 2016</dt>
      <dd>Jhalokhathi Govt. High School, Jhalokhathi.</dd>
    </dl>
  </div>
  <div
    class="tab-pane fade"
    id="pills-profile"
    role="tabpanel"
    aria-labelledby="pills-profile-tab"
  >
    <dl>
      <dt>Game Development</dt>
      <dt>CPU Architecture</dt>
      <dt>Photography</dt>
      <dt>FrontEnd Web</dt>
      <dt>Graphics Designing</dt>
      <dt>Android App Development</dt>
    </dl>
  </div>
  <div
    class="tab-pane fade"
    id="pills-contact"
    role="tabpanel"
    aria-labelledby="pills-contact-tab"
  >
    <dl>
      <dt>Champion in AUST Intra Valorant Cup</dt>
      <dt>Runners Up in AUST CSE Championship Spring-2020</dt>
      <dt>Champion in AUST CSE Championship Fall-2020</dt>
    </dl>
  </div>
</div>
';

?> 