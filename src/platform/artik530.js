
/* GPIO definition */
exports.ARTIK_A530_GPIO_GPIO0 = 128;
exports.ARTIK_A530_GPIO_GPIO1 = 129;
exports.ARTIK_A530_GPIO_GPIO2 = 130;
exports.ARTIK_A530_GPIO_GPIO3 = 46;
exports.ARTIK_A530_GPIO_GPIO4 = 14;
exports.ARTIK_A530_GPIO_GPIO5 = 41;
exports.ARTIK_A530_GPIO_GPIO6 = 25;
exports.ARTIK_A530_GPIO_GPIO7 = 0;
exports.ARTIK_A530_GPIO_GPIO8 = 26;
exports.ARTIK_A530_GPIO_GPIO9 = 27;
exports.ARTIK_A530_GPIO_AGPIO0 = 161;

/* SERIAL definition */
exports.ARTIK_A530_SERIAL = { 'UART' : { 'UART4' : 4 } };


/* PWM definition */
exports.ARTIK_A530_PWM = { 'PWMIO' : { 'XPWMIO0' : 2 },
			   'POLR'  : { 'NORMAL' : 0,
				       'INVERT' : 1 }
		       };

/* SPI definition */
exports.ARTIK_A530_SPI = { 'BUS' : { 'BUS2' : 2 },
			   'CS'  : { 'CS0' : 0,
				     'CS1' : 1 },
			   'MODE' : { 'MODE0' : 0,
				      'MODE1' : 1,
				      'MODE2' : 2,
				      'MODE3' : 3,},
			   'BITS' : { 'BITS8' : 8},
			   };

/* TIME definition */
exports.ARTIK_A530_TIME = { 'ZONE' : { 'UTC' : 0,
		 		       'GMT1' : 1,
		 		       'GMT2' : 2,
				       'GMT3' : 3,
				       'GMT4' : 4,
				       'GMT5' : 5,
				       'GMT6' : 6,
				       'GMT7' : 7,
				       'GMT8' : 8,
				       'GMT9' : 9,
				       'GMT10' : 10,
				       'GMT11' : 11,
				       'GMT12' : 12 },
			    'DFORMAT_DATE' : 'h:m:s:S-d-D/M/Y\0'
		       };
