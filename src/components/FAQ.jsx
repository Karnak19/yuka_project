import React from "react";

import FaqCollapse from "./FaqCollapse";

const FaqStyle = {
	backgroundColor: "white",
  backgroundImage: 'linear-gradient(to bottom,rgba(254, 222, 79, 0.7),rgba(254, 222, 79, 1))'	
}


export default function Faq() {
	return (

		<div style={ FaqStyle } className="py-4">
			<h1
				style={{
					textAlign: "center",
					fontFamily: "Patrick Hand",
					fontSize: "40px",
					fontWeight: "bold",
					color: "#922D61",
					marginBottom: "5vh",
				}}
			>
				FOIRE AUX QUESTIONS
			</h1>
			<FaqCollapse title="Comment scanner ?" description="Demande à Google" />
			<FaqCollapse
				title="Comment est financée l’application ?"
				description="Par vos impots"
			/>
			<FaqCollapse
				title="Yukids est-elle une application indépendante ?"
				description="Oui, Yukids est une application 100% indépendante. Aucune marque ni aucun fabricant ne peut nous influencer"
			/>
			<FaqCollapse
				title="Comment sont notés les produits alimentaires ?"
				description="5 4 3 2 1 0 Partez !"
			/>
			<FaqCollapse
				title="Yukids exploite-t-il les données des utilisateurs ?"
				description="Oui, nous revendons vos données à Google"
			/>
			<FaqCollapse
				title="Comment sont vérifiées les informations renseignées dans l’application ?"
				description="Vérification par l'équipe Yukids et par les utilisateurs"
			/>
			<FaqCollapse
				title="J’ai scanné un produit qui n’a aucune note, pourquoi ?"
				description="Parcque"
			/>
			<FaqCollapse
				title="Pourquoi faut-il s’inscrire pour utiliser Yuka ?"
				description="Pour pouvoir revendre vos données"
			/>
		</div>
	);
}
