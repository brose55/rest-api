export default {
	port: 1337,
	dbUri: 'mongodb://admin:password@localhost:27017/rest-api?authSource=admin',
	saltWorkFactor: 10,
	accessTokenTtl: '15m',
	refreshTokenTtl: '1y',
	publicKey: `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDU/ggNcj/CvAW2S4p6XXjd0ted
ztu4klM/n6pKFlBFbhxGIgMwRVqERkZM82gmDgsEbqZ+w8ns5O4Nd4tJrrPalKDt
XuIeOBc0sLoPjI/tER3Pv1Lw/KuOfVsh6RNepFRldDlg0ObJDG4BEHFIy+DSkpc9
xElUvYWiDY5MxdtUmwIDAQAB
-----END PUBLIC KEY-----`,
	privateKey: `-----BEGIN RSA PRIVATE KEY-----
MIICXgIBAAKBgQDU/ggNcj/CvAW2S4p6XXjd0tedztu4klM/n6pKFlBFbhxGIgMw
RVqERkZM82gmDgsEbqZ+w8ns5O4Nd4tJrrPalKDtXuIeOBc0sLoPjI/tER3Pv1Lw
/KuOfVsh6RNepFRldDlg0ObJDG4BEHFIy+DSkpc9xElUvYWiDY5MxdtUmwIDAQAB
AoGBALW+djyTCpkuO2mMGAPGEsaljNrZkl9ybJrTsUk6tRApnvKxPytHYq+QD5jF
8k7WmMwVZviwNHNx/Td8lFwxOMFyWa/EaT5B8lcpeBw9GgcG1/5mtLRbM3Da9cBN
5+2Mj3zWtqlhI+TusfWQKqTD0TmKp7Hlq/wOe+xAZPud7DMhAkEA8pwstXqLS1hu
XAHwRjxD3pGAO4drPy8neAlFYGy3Pu+lTAXcrehhVB84n0dt6ya64FNV+hHgxaui
JQQFaZJJgwJBAOC/Y586Y09nQE2GuEcYOzUGS1PXjqPOLhk4pniza1eZt/PjbCZg
Ib2tkd/AzvSDImZZtikGA5Je8ePBWYVlFQkCQQCeE+CVxukoCNCvppu2R+I5DTku
kIfyvXjMH85Si8PCgEeGB3PI5Nc2BrnQHqyiQbQWInas4CVC5xhZYgtcxHKdAkEA
gzIWRJAAAw0h81+uWQojHdvzwxi1Epg8PsrcGt+ZzMRWJs/ehTRe3evhmL1j0kZu
oVLDTIVPNnWoPKzUxlLwiQJAPlLtAciGZj69CDMIR/exizv1K8Fhv0U/l2hQgaET
dqL5QB1gMTotGscFNWvSnpSxPQwp8QOEiCannkGsNPzeTQ==
-----END RSA PRIVATE KEY-----`,
};
