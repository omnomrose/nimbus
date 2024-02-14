interface ICurrent {
    name: string;
    dt: number;
    main: {
      temp: number;
    };
    weather: {
      main: string;
      description: string;
    }[];
    wind: {
      speed: number;
    };
    sys: {
      country: string;
    };
}

interface IFive {
    formattedDate: string;
    main: {
        temp: number;
    };
    wind: {
        speed: number;
    };
    weather: {
        main: string;
        description: string;
    }[];
    dt_txt: string;
}


