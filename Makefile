.PHONY: serve
serve:
	@rm -rf ./.nuxt
	@npm run dev

.PHONY: live
live:
	@rm -rf ./.nuxt
	@DOMAIN=theseedsquad.com npm run dev
