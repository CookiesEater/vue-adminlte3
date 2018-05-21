<template>
  <div>
    <h5>Info Box</h5>
    <b-row class="mb-4">
      <b-col>
        <a-lte-info-box icon="envelope" header="Messages" icon-variant="info">1,410</a-lte-info-box>
      </b-col>
      <b-col>
        <a-lte-info-box icon="flag" header="Bookmarks" icon-variant="success">410</a-lte-info-box>
      </b-col>
      <b-col>
        <a-lte-info-box icon="copy" header="Uploads" icon-variant="warning">13,648</a-lte-info-box>
      </b-col>
      <b-col>
        <a-lte-info-box icon="star" header="Likes" icon-variant="danger">93,139</a-lte-info-box>
      </b-col>
    </b-row>

    <h5>Info Box With <code>&lt;a-lte-info-box variant="*"&gt;</code></h5>
    <b-row class="mb-4">
      <b-col>
        <a-lte-info-box icon="bookmark" header="Bookmarks" variant="info">
          41,410
          <b-progress :value="30" />
          70% Increase in 30 Days
        </a-lte-info-box>
      </b-col>
      <b-col>
        <a-lte-info-box icon="thumbs-up" header="Likes" variant="success">
          41,410
          <b-progress :value="50" />
          70% Increase in 30 Days
        </a-lte-info-box>
      </b-col>
      <b-col>
        <a-lte-info-box icon="calendar-alt" header="Events" variant="warning">
          41,410
          <b-progress :value="70" />
          70% Increase in 30 Days
        </a-lte-info-box>
      </b-col>
      <b-col>
        <a-lte-info-box icon="comments" header="Comments" variant="danger">
          41,410
          <b-progress :value="80" />
          70% Increase in 30 Days
        </a-lte-info-box>
      </b-col>
    </b-row>

    <h5>Info Box WIth <code>&lt;a-lte-info-box variant="*" gradient&gt;</code></h5>
    <b-row class="mb-4">
      <b-col>
        <a-lte-info-box icon="bookmark" header="Bookmarks" variant="info" gradient>
          41,410
          <b-progress :value="10" />
          70% Increase in 30 Days
        </a-lte-info-box>
      </b-col>
      <b-col>
        <a-lte-info-box icon="thumbs-up" header="Likes" variant="success" gradient>
          41,410
          <b-progress :value="25" />
          70% Increase in 30 Days
        </a-lte-info-box>
      </b-col>
      <b-col>
        <a-lte-info-box icon="calendar-alt" header="Events" variant="warning" gradient>
          41,410
          <b-progress :value="45" />
          70% Increase in 30 Days
        </a-lte-info-box>
      </b-col>
      <b-col>
        <a-lte-info-box icon="comments" header="Comments" variant="danger" gradient>
          41,410
          <b-progress :value="85" />
          70% Increase in 30 Days
        </a-lte-info-box>
      </b-col>
    </b-row>
  </div>
</template>
