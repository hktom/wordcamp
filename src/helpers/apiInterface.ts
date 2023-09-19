export interface IWordCamp {
  id: number;
  date: string;
  date_gmt: string;
  guid: {
    rendered: string;
  };
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  author: number;
  featured_media: number;
  template: string;
  StartDate: string;
  EndDate: string;
  EventTimezone: string;
  Location: string;
  URL: string;
  Twitter: string;
  WordCampHashtag: string;
  NumberofAnticipatedAttendees: string;
  OrganizerName: string;
  WordPressorgUsername: string;
  AVWranglerName: string;
  VirtualEventOnly: string;
  HostRegion: string;
  VenueName: string;
  PhysicalAddress: string;
  MaximumCapacity: string;
  AvailableRooms: string;
  WebsiteURL: string;
  ExhibitionSpaceAvailable: string;
  _venue_coordinates: {
    latitude: number;
    longitude: number;
  };
  _venue_city: string;
  _venue_state: string;
  _venue_country_code: string;
  _venue_country_name: string;
  _venue_zip: string;
  _host_coordinates: string;
  _host_city: string;
  _host_state: string;
  _host_country_code: string;
  _host_country_name: string;
  _host_zip: string;
  session_start_time: number;
  _links: {
    self: [
      {
        href: string;
      },
    ];
    collection: [
      {
        href: string;
      },
    ];
    about: [
      {
        href: string;
      },
    ];
    author: [
      {
        embeddable: boolean;
        href: string;
      },
    ];
    version_history: [
      {
        count: number;
        href: string;
      },
    ];
    predecessor_version: [
      {
        id: number;
        href: string;
      },
    ];
    "wp:featuredmedia": [
      {
        embeddable: boolean;
        href: string;
      },
    ];
    "wp:attachment": [
      {
        href: string;
      },
    ];
    curies: [
      {
        name: string;
        href: string;
        templated: boolean;
      },
    ];
  };
}
