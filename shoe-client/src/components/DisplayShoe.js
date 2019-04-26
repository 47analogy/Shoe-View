import React from 'react';
import { Container, Grid, Card } from 'semantic-ui-react';

const DisplayShoe = props => {
	console.log('props', props);
	return (
		<div>
			<h5>YABADABA</h5>
			<Container centered="true">
				<Grid width={16}>
					{props.allShoes.map(shoe => {
						return (
							<div key={shoe.id}>
								<Grid.Column>
									<Card
										style={{ marginBottom: '30px', justifyContent: 'spaceEnd' }}
										image={
											'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEhUPDxIVEhUVFRUSFRUXFRUWEBgVFRUXFhUYFhYYHSggGBolGxUVITEhJSkrLi4uGB8zODMsNygtLisBCgoKDQ0OGxAQGi0fHx0rLS0uLS0yLy0rLSsrKy0rLS0tLSstLS0tLS03LS0rLS0tNS0tLS41LS0tLSstNy0tN//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABQECBgcIBAP/xABJEAABAwICBgUHBwkHBQAAAAABAAIDBBESIQUGMUFRYQcTInGBFDJicpGhsUJSc4KissEjJTNDU4OSo9EkNWNkdMLwCBUWs+H/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/EACgRAQACAQMCBAcBAAAAAAAAAAABAhEDEjFBUQQTITIiM1JxgaGxI//aAAwDAQACEQMRAD8A3iiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIi1R0p9JwpQ6jonAy5tfID5p2FrPSG927dc7AybXbTdQYZodG5ysYS9485thcsi3GW17X2czkIzom1+GkYvJp3f2mJoNza80ezrBs7QyDh3HflgXQfpJ7nVkb3lxPUzC5OTgXtcRwJu3P0Qo/XzR79GV8dfSHqxK8yscBlHOP0rLbMLgb23hzhuQdIooHUrWWPSdKypjs13mSsvcxyjzm92YIO8EFTyAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIsH161rMQdTUzu35r5L2DSQTgaRch1gS4gXaNlzskzhYjKI6UdfxTsfTUziCOxJK0jEHG/5OI38/I3d8m2Wd8PO1RMXuLzv3bgNwHJZPp/RlbVP6xlLN1bbhl2YXG9sTiy9wTYZbgAN11i/VG5BBBBIIORBGRBHFUZ10L1OCukYTk+nflxc17HD3Yls7WnRQr6WSmsMRAfEcuzKzNh5XzaeTitN6gTiCvp3HY5xiJ+kaWj7Rat+08e9Eam6H9aDRVzYZSWxVJ6iQHIMmafyTiDsNyWHv5LpFcwdKehPJq2QsGFs4FWwjIB97SgcDiufrBb91A09/3Cgp6om73MwyfSs7EndcgnuIQZEiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIihNYNLGIdTD+lcL32iNl7F7vfYbyOAKlrRWMytazacQjtb9Y+qDoYXYS1t5pd0TbbG8ZCNg3XB4LB6Gmw/lHAhxFmgm7mNJvYn55sC477AfJC+04Ej8O2ON2LM3MkwNy5xO3Cc7na71VdI4AEuIAAxOcTYADMkncFz082+Kfw6amK/DH5fOeYNBc5wa1oLnOOwNAuSfBaY01pBs08s9sIkeXAb7bBfnYXPMqX121t8pPk9NcQA3c7YZXA5EjcwHMDxPLDyeK6uT0isc1wfGcJaQ5p3hzTcEeIXUWha9tTBFUxizZWNktwLh2h3g3HguVAty9B+sIdFJo6Q9qMmaHmxx/Kt8HEO+u7ggkem2hBpqepAzhmMZPoTMNweOcbfavb/wBO9Yeoq6UnKKZj2i+wSNIPvjv4r69KzgdFzevBbv65n4XUV/09P/L1zeLad3P9Z/VBu1ERAREQEREBERAREQEREBERAREQEREBEVHOAzOSDx6UrhAzFa7icLG73POwd28ncAVgemqlzR1bXXmmN3PtsAyc/uaLBo44QpnSmkGnFVSOwxsa4sJ2NjGbn2+c62zhhCxAy5PqZz1eIY3YjlFG3zGE8rkni5x25Ly/NvjpH7emP8qZ6yuOCNlyQxjG3JJ7LWjaXErVOumt5qyYICW04Pc6UjY53BvBvic7Ws101tdWu6mK7KdpyGx0hGxz+XBu7vWKkr1PMql17KbRkj8yMA4nb4BSMOh4x513nnkPYEEFdS2rElRFUwzUwwyNeCHOuI7HJ2MnLCWkg8rqXjp2Ri9msHHIe9XNqnOH5Ftx8512s/q7wQZb0pawCaBtNAcbesEspb5oawEMaTvJLr29ELMOgLRAjpZqwm76iXBa2TWQ3a0A783OuRlu3LT+sFU0Q4GMtcjtON5HHblbJg5AX4l1l0zqZofyKhpqWwBjiaH2/aEYpD/EXIJpERAREQEREBERAREQEREBERAREQEREBQusFRe1OD5wxSfR3836xFu4OUrVVDY2OkebBoJPHw4lYXpKvLGukcMUjyOzxe8hkUQ8S1viTxXDXvtjEcy7aNN05niEXpupa9xa5wbFDaWZxIwYgMTGu5NFnnvYM8wtMa8a3OrXdVCS2nachsdI4fLf+A3d69/SPrIZHeQQPxRxuJneP1097uPqtdsHEb7NWC8hn8V006RSuGNS+62V0bHPIa0XJU/QaLbH2ndp3HcO7+q++idG9W3Mds+ceHJSEsjYhiNyScLQBd7nHY1o3lbYfIQ5YnWaBmSdll82SuflA24/aOyZ4Da7wyWYavdGFfXWmrC2mj2sjcMbgOJYDa/rX7llukeiu0f9nnLpAMg8AMdy7I7KzvjlrbLUsej23xSEyO4u80eq3YF7cK+EpfG50cjS1zXFr2na1w2hegOyutIv1Z0V5ZpKjpiLt63r5OGCIYjfkbW8V04tI9BtB1ldVVRGUMTIGndeVxc63OzB7ea3ciCIiAiIgIiICIiAiIgIiICIiAiIgKhVV5dJVYijL9p2NHFx2Du3nkCpM49ViM+iH1grA53VDYyzn837WN8PO8WrV3SZrC6mjLYzaTzGm+YkkYcRGdwWRG99xnYd2Wb1M4iY+eU3awGR53udtt3lxAHeFzrrVpp1ZUOlcbgEhvDMkuI5Ek25Bo3LzaUb7756PTqYpTZHVDXU1q9o/EetcPV/F3go2gpeteG7trjwaNqzSOMRsAyGWXAAL1PKsmlDBvOwAAXe5xyDWgbSStp9GuohjIrK0XnI7LdrIWnPAzi/wCc7wG9Y50WavGqkGkJW9gEspWnlk+cjjtaPHgt5QxBoDRsC4zO+23pHLr7K56yua22QVJRkr1bJsXWeHNz70tRtZpSUNFsUUTz6xBBP2QoAmzL8lPdL5/O0n0EH+5YzpuXq6dx3mzR3lI4WW5ugmhwaN687amaWbfsB6tv3L+K2KofVDR3ktDTU++OCJrvWDBjPi658VMKsiIiAiIgIiICIiAiIgIqF1tqitM6djpo3PsZHAdljS3E525oJIAJ/AoJZFhEOu8/y6Cw9GoY547w5rRfxUlBrjGfPgnZ3tYR7WvK5edp/VDr5Op9MslRQX/lEJ2MlP1P6lWTaxm3Yitze4D7LbkpOvpx1I0dSeicnmaxpe8hrQLknYsWrqx0z8WYAyY07QN7nekeG4c7ry1FXJKQ6R2IjMADDGDxa3jzNz3KD1s1qi0bCZH2dK4EQxb3O+c4bmDfx2LzX1p1Z21emmjGnG6zE+mTWIRsbo6N3aNpJrbj8hp8DfxbwWnyV6NI1r55XzSuxPkcXucdpJXzpIOse1nE5928+xeulYrXDx3tunLJNWqGzbna/tH1BsHj+KlHUT62eKiiNjM6z3fMhbnI4+APfay+tI3Cwu2YshwDR+G32LNeiDQpk6yvcM5j1MN9ogYe04es8fZKalttcw1Sm6WztWtHMhja2NuFjGiOMcGNFh/zvU2rImBoAG5XpSu2uGb23WyK1+xXKjltlzz0v/3tJ9BB8HKFqtH+UT0NKRcTVLWkeiC0O9ziprpZz0xL9FTj3Fe3U6i63S9AD+qjnnI+rhHvt7FI4WW+QqoiqCIiAiIgIiICgNaNcaLRrQauYMcRdsY7UzhxDBnbmbDmvVrTpptBSTVj8xEwuA+c7Yxvi4geK5PLqvSlU54Dp6iVxc7l7cmsGzgMkG39JdOzdlJQveNzpHhv2WB3xWP13TXpB/6Onij8JHfCy8FH0VTuF6iqjjPzWNdKR43aPYpWLoqpgO3VTuPLA0e8FFYzXdJ2k5QQZAz1Yzf7RKxuu0rU1JvNLI/m8nAO5uwLZ7OjWjHy6h/fI0fdYFGVWidCQG0krHEGxHXvkz3ghhQyhNX9bKqN7YIcdTc4RG7tvPJpGYt7AtnUdTM5oMkDozvGON33XLDYta9F0rSKYeEURaT3ufYnxURpPpJkILaWIR7sb7Pf3hvmg991x1PD6d+YdaeI1KcS2c7SGHzmTAceplLc/SDSPevNU63UcFxLMGOG0Fr8Xday0VXaUnndimmkkPpONvAbB4Lxk3zK4x4HTju6z4zUns2zp/pTYAWUTMTt0jx2RzDQc/H2Fay0npKWpkMs7zI85kleNVXppp1p7Yee+pa/KhU1qzSlzi76g8c3HwFlCtaSbDach4rONBwtgidK82bGCL8XbXHntstsPvpKF8zo6ODzpnshFhfC1xDXOPLPPlddDasaMZTxMjjFmMa2Ng9FosPHf4lad6JdGOqKuStkH6NrWMG4OlBNu8Rm55y8lvmGPC0DguPu1Pt/XX20+76IiLs5CoVVEHO3Sgb6Yn5CAfYB/FZV0Y02LS0kv7KhZHb0pZcV/Yz3rE+kj++ajvh/9TFnfRDDeq0hKRkPJIQebY3ud99qkcLPLaCIiqCIiAiIgIiIMA6bqV8ui3Rxua28sWLE4NBaDe2e03sbclp7UyQ6PMuKxMgYA4cG4rjPmR7F0JrnoRtdRzU7mh5LS5gIuOsbmz35eJXMUDGRnJpA3jG8W7rH43QbGj1lX1GsnJYbTsaR2ZHt9drJRb6vV27819XtcPNLHjkXNf8AwubYfxII7X/WeoneaduKOBtrgXHWG2Zcd7c8hsyusKCz+WQEWex3sxePYvbxUVU0kDt7LnjZrvDYUGK3VVNS6EG1pI94Xjl0W8bLH3FB4bKq+r6Z4+SfDP4L5EEbQR4ICoqsYXZNBPcFKUGiCSDIOeHf9Y7ggu0JQFxEhG+zf69ynK20z20TMooxjmdyHaI7yfiOC8vllj1VNZ8hyxD9FGO/f/zbsUhDQdXA6KMl0kpbHf5TpJXBgPIdo2H4osNy9EFBhomTOFjM59Qe5xwx/Yaz2LYSjtB0TYIWRNyDGtjHcxoaPgpFc9OPTPdrUn1x2ERF0YEKKhQc59IBvpqpHpxD+TGtm9D7PyVZJ86sc0fu4om/EFaw14P57qj/AIkQ9kMYW1+h6K1A5/7Sqqn/AM0s/wBqkcLLOERFUEREBERAREQFzJ0g6M8m0hURWsOsMjfVk7Y9l7eC6bWl+nrRmGWnqwMntdC482HEz3Od7EGA6Nfdtl77KI0XJuUugtcFFaVwNyLQSeQUsVDaaFwDwNkEQ+Nt7gFvcSCrWhw2SPHjf4q8oEFA+T9pfvaPwVesk4sP1T/VVVEFRNLuLB3NP4qyRjn5SSOcPmjst9gV11S6CR0ZM1nZs1o232XPPiso1Ei8r0hTNtdrZHVB9WBnYJ/eOasHBW2+grRuKaeoIyjZFTtPNxM0nuMYWb8NV5bpibYAK9EViMMiIioKhVVQoObddH/nqq+mYPZFGFufotjw6Mg9Iyv/AIpnn8VpLXJ355qf9SPusW9ejcfmujPGBr/4u1+KkcLPLJERFUEREBERAREQFhvS3ozyjRsxA7UNp2/U877JcsyXzqYGyNdG8Xa5paRxDhY/FByVo6Sz1kLDksclh6qZ8bXYxHI+O434HFt7btiyCB2SC9yitMjsX9IfipVyjNLfoz3j4oIMlArVUFBVUS6ICtVypZBdC25A4ldFdDOj+q0cyQixnc+oPGzzZn8tjFz3R0zpXCJnnSObE31pXBg+97l1poikbDDHEzJrGtYO5oDR7gFmeYhriHtREWmRERAVCqog5i1vP54qT/mvgGroHUaLBo6ibwpYB/KaufdbP73qv9S8+wf/ABdHavR4aWnbwgiHsY1SOFnlIIiKoIiICIiAiIgIiIMV1o1Boq8mSSMMmP66PsycsRHneK1ppzUKto7uY3yqIfKjFpgPSZsPeLLeqKY7LlzEahmYxWI2tcC143ZtPxXh0hICwgEG/PmuktN6rUdaP7TAx5+dYB4+sM1r3TnQy113UdQW8GyDGP4vO96mccwuI6NIuVFmGmOjXSdPc+TiVo+VE4H3OsfisXqqGaI2likj9ZjgPbaybo7ptl8EVnWt4j2hXXWkXIFQK4ZWB2kgAbXEnYABmSgzbol0V5RpGLLswh1Q7hexZGPa5x+qukALLAOh/VN9BTOmqG4Z6gh7m72RgWjYedrk83LYCzEeuVnjAiItIIiICIqFBzHrYPzrVn/MTe5pXSmjBaGIf4bPuhcy6ZqOt0nUvsBinqLtvwD2+dblfYum6B14ozxY0/ZCRwsvQiIiCIiAiIgIiICIiAioVbZBUuXzc7mrsCYUHkmpw7aXe1eCo0IHbHuF+53xU1hTCpMRPKxMxwwur1FEm2cHk+nhePeo93RhEdvkru+iYD7WvC2JhTCs+XXs15lu7XQ6LabfHTH9w4e4SKd1e1MpKNwkjp4GyDZI2PtDuLiS3wKyjCmFWKRBN5nleFVWtCuWmBERAREQEKIggW6r0IeZBRUweSSX9RHjJO0k2uSbn2qdY0AAAWAysNitwq9AREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERB/9k='
										}
										header={shoe.shoeName}
										meta={shoe.designer}
										extra={`$${shoe.price}`}
									/>
								</Grid.Column>
							</div>
						);
					})}
				</Grid>
			</Container>
		</div>
	);
};

export default DisplayShoe;

{
	/* <Card.Group>
<Card>
	<Image src={shoe.imageURL} />
	<Card.Header>
	{shoe.shoeName}
	</Card.Header>
	<Card.Meta>
	{shoe.designer}
	</Card.Meta>
	<Card.Description>
	{`$${shoe.price}`}
	</Card.Description>
</Card>
</Card.Group> */
}

// (
// 	<div key={shoe.id}>
// 		<Grid columns="three">
// 			<Grid.Row>
// 				<Grid.Column>
// 					<img src={shoe.imageURL} alt={shoe.shoeName} />
// 					<div>{shoe.shoeName}</div>
// 					<div>{shoe.designer}</div>
// 					<div>{shoe.price}</div>
// 				</Grid.Column>
// 				{/* <Grid.Column>
// 					<img src={shoe.imageURL} alt={shoe.shoeName} />
// 					<div>{shoe.shoeName}</div>
// 					<div>{shoe.designer}</div>
// 					<div>{shoe.price}</div>
// 				</Grid.Column>
// 				<Grid.Column>
// 					<img src={shoe.imageURL} alt={shoe.shoeName} />
// 					<div>{shoe.shoeName}</div>
// 					<div>{shoe.designer}</div>
// 					<div>{shoe.price}</div>
// 				</Grid.Column> */}
// 				{/* <Grid.Column>
// 					<div>{shoe.price}</div>
// 				</Grid.Column> */}
// 			</Grid.Row>
// 		</Grid>
// 	</div>
// );
// })}
// </div>
// );

// {props.allShoes.map(shoe => {
// 	return (
// 		<div key={shoe.id}>
// 			<div>
// 				<img src={shoe.imageURL} alt={shoe.shoeName} />
// 			</div>
// 			<div>{shoe.shoeName}</div>
// 			<div>{shoe.designer}</div>
// 			<div>{shoe.price}</div>
// 		</div>
// 	);
// })}

{
	/* <Grid columns='three'>
    <Grid.Row>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
      </Grid.Column>
    </Grid.Row>
  </Grid> */
}

{
	/* <div>
			{props.allShoes.map(shoe => {
				return (
					<div key={shoe.id}>
						<div>
							<img src={shoe.imageURL} alt={shoe.shoeName} />
						</div>
						<div>{shoe.shoeName}</div>
						<div>{shoe.designer}</div>
						<div>{shoe.price}</div>
					</div>
				);
			})}
		</div> */
}
